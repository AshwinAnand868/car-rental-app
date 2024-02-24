import { Popup } from 'semantic-ui-react';
import 'semantic-ui-css/components/popup.min.css';
import { ReactNode, useContext, useEffect, useRef, useState } from 'react';
import Modal from '../Modal/Modal';
import CategoryList from '../Category/CategoryList';
import BusinessList from '../BusinessList/BusinessList';
import { getNearByPlace } from '@/services';
import CategoryData from '../Shared/CategoryData';
import { StoreLocationsContext } from '@/context/StoreLocationsContext';
import StoreLocationsContextType from '@/context-models/StoreLocationsContextType';
import Address from '@/models/Address';
import { UserLocationContext } from '@/context/UserLocationContext';
import UserLocationContextType, { UserLocation } from '@/context-models/UserLocationContextType';
import getDistanceFromLatLonInKm from '../Shared/getDistanceFromLatLonInKm';
import Map from '../Maps/Map';
import { BusinessListContext } from '@/context/BusinessListContext';
import { SelectedBusinessContext } from '@/context/SelectedBusinessContext';
import SelectedBusinessContextType from '@/context-models/SelectedBusinessContextType';

function SearchInput() {

    const [category, setCategory] = useState<string>('Nearest stores');
    const [showModal, setShowModal] = useState<boolean>(false);
    const [businessList, setBusinessList] = useState<Address[]>([]); // local state to force a re-render
    const { userLocation, setUserLocation } = useContext(UserLocationContext) as UserLocationContextType;
    const [selectedBusiness, setSelectedBusiness] = useState<Address>({
        latitude: 0,
        longitude: 0,
        location: '',
        name: '',
        rating: 0
    });

    const {
        storesLocs,
        setStoresLocs
    } = useContext(StoreLocationsContext) as StoreLocationsContextType;


    useEffect(() => {
        setBusinessList(storesLocs);
    }, [storesLocs]);

    useEffect(() => {
        setSelectedBusiness({
            ...selectedBusiness,
            latitude: userLocation.lat,
            longitude: userLocation.lng
        })
        console.log("user lat: " + userLocation.lat);
    }, [userLocation])

    const sortStoreLocsByCategory = (value: string = 'nearest') => {
        // execute the below if condition only when the store's distance from user is not collected
        if (!storesLocs[0]?.distanceFromUser) {
            setEachStoreDistanceFromUserLoc();
        }

        let tempArray: Address[] = [...storesLocs];
        if (value === 'rating') {
            tempArray.sort((a: Address, b: Address) =>
                b.rating - a.rating
            );

            // set the category selected to Highly Rated
            setCategory(CategoryData.CategoryListData[1].name);

        } else if (value === 'nearest') {
            tempArray.sort((a: Address, b: Address) =>
                a.distanceFromUser! - b.distanceFromUser!
            );

            // set the category selected to Nearest Stores
            setCategory(CategoryData.CategoryListData[0].name);
        }

        setStoresLocs(tempArray);
    }

    // stores the distances of all the stores from current user location into an array
    const setEachStoreDistanceFromUserLoc = () => {
        storesLocs.forEach((store: Address) => {
            store.distanceFromUser = getDistanceFromLatLonInKm(store.latitude, store.longitude, userLocation.lat, userLocation.lng);
            console.log("Store's distance: " + store.distanceFromUser);
        });
    }

    const openModalHandler = () => {
        setShowModal(true);
        document.body.style.overflow = 'hidden';
        sortStoreLocsByCategory();
    }

    const closeModalHandler = () => {
        setShowModal(false);
        document.body.style.overflow = 'unset';
    }

    return (
        <div className='tw-mt-5'>
            <h2 className='tw-text-center tw-text-[20px]
            tw-text-gray-400 tw-mb-3'>Let's select a store</h2>
            <div className='tw-flex tw-justify-center'>
                <div className='tw-flex tw-bg-gray-100 tw-p-1 tw-px-5 tw-gap-2 tw-rounded-2xl sm:tw-rounded-full tw-flex-col sm:tw-flex-row tw-cursor-pointer'
                    onClick={openModalHandler}>
                    <div className='tw-flex tw-items-center tw-justify-evenly'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="tw-w-5 tw-h-5 tw-cursor-pointer">
                            <path fillRule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                        </svg>
                        <input type='text'
                            placeholder='Location'
                            className='tw-outline-none tw-bg-transparent tw-p-2 tw-text-gray-400 tw-cursor-pointer' />
                    </div>
                </div>

                <Modal
                    isOpen={showModal}
                    onDismiss={closeModalHandler}
                    title={'Select your preferred store location...'}
                >
                    <SelectedBusinessContext.Provider value={{
                        selectedBusiness,
                        setSelectedBusiness
                    }}>
                        <BusinessListContext.Provider value={businessList}>
                            <div className='tw-grid tw-grid-cols-1 md:tw-grid-cols-2 tw-gap-8 tw-px-6 md:tw-px-10 tw-max-w-full tw-mt-2 3xl:tw-mt-5 3xl:tw-mb-5 md:tw-w-[1000px] tw-h-[650px] md:tw-h-[600px] tw-max-h-641px'>
                                <div>
                                    <CategoryList setSelectedCategory={(value: string) => sortStoreLocsByCategory(value)} />
                                    <BusinessList selectedCategory={category} businessListData={businessList} />
                                </div>
                                <div>
                                    <Map />
                                </div>
                            </div>
                        </BusinessListContext.Provider>
                    </SelectedBusinessContext.Provider>
                </Modal>
            </div>
        </div>
    )
}

export default SearchInput;
