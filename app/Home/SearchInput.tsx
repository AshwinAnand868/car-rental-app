import { Popup } from 'semantic-ui-react';
import 'semantic-ui-css/components/popup.min.css';
import { ReactNode, useContext, useEffect, useRef, useState } from 'react';
import Modal from '../Modal/Modal';
import SearchBar from '../SearchBar/SearchBar';
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

function SearchInput() {

    const [category, setCategory] = useState<string>('Nearest stores');
    const [showModal, setShowModal] = useState<boolean>(false);
    const [businessList, setBusinessList] = useState<Address[]>([]); // local state to force a re-rendewr

    const {
        storesLocs,
        setStoresLocs
    } = useContext(StoreLocationsContext) as StoreLocationsContextType;

    const userLocationContext = useContext(UserLocationContext) as UserLocationContextType;
    let userLocation: UserLocation = {lat: 0, lng: 0};
    
    if(userLocationContext && userLocationContext.userLocation) {
        userLocation.lat = userLocationContext.userLocation.lat;
        userLocation.lng = userLocationContext.userLocation.lng;
    }

    const sortStoreLocsByCategory = (value: string = 'nearest') => {       
        // execute the below if condition only when the store's distance from user is not collected
        if(!storesLocs[0]?.distanceFromUser) {
            setEachStoreDistanceFromUserLoc();
        }

        let tempArray: Address[] = [...storesLocs];
        if(value === 'rating') {
            tempArray.sort((a: Address, b: Address) =>
                b.rating - a.rating
            );

            // set the category selected to Highly Rated
            setCategory(CategoryData.CategoryListData[1].name);

        } else if(value === 'nearest') {
            tempArray.sort((a: Address, b: Address) =>
                a.distanceFromUser - b.distanceFromUser
            );

            // set the category selected to Nearest Stores
            setCategory(CategoryData.CategoryListData[0].name);
        }  
            
        setStoresLocs(tempArray);
    }

    // stores the distances of all the stores from current user location into an array
    const setEachStoreDistanceFromUserLoc = () =>  {
        storesLocs.forEach((store: Address) => {
            store.distanceFromUser = getDistanceFromLatLonInKm(store.latitude, store.longitude, userLocation.lat, userLocation.lng);
            console.log("Store's distance: " + store.distanceFromUser);
        });
    }

    useEffect(() => {
        setBusinessList(storesLocs);
    }, [storesLocs]);

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
        <div className='mt-5'>
            <h2 className='text-center text-[20px]
            text-gray-400 mb-3'>Let's Search what you need</h2>
            <div className='flex justify-center'>
                <Popup
                    trigger={
                        <div className='flex bg-gray-100 p-1 px-5 gap-2 rounded-2xl sm:rounded-full flex-col sm:flex-row'>
                            <div className='flex items-center justify-evenly'>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 cursor-pointer" onClick={openModalHandler}>
                                    <path fillRule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                                </svg>
                                <input type='text'
                                    placeholder='Location'
                                    className='outline-none bg-transparent p-2 text-gray-400' />
                            </div>
                            <hr className='block sm:hidden w-full h-0.5 mx-auto bg-gray-300 border-0 rounded' />
                            <div className="search-date">
                                <input type="date"
                                    className='outline-none bg-transparent p-2 text-gray-400' />
                            </div>
                        </div>
                    }
                    content='Oops! Search functionality has not been implemented yet.'
                    position='bottom center'
                />

                <Modal
                    isOpen={showModal}
                    onDismiss={closeModalHandler}
                    title={'Select your preferred store location...'}
                >
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-8 px-6 md:px-10 max-w-full mt-2 3xl:mt-5 3xl:mb-5 md:w-[800px] h-[650px] md:h-[600px] max-h-641px'>
                        <div>
                            <SearchBar />
                            <CategoryList setSelectedCategory={(value: string) => sortStoreLocsByCategory(value)} />
                            <BusinessList selectedCategory={category} businessListData={businessList} />
                        </div>
                        <div>
                            Google Map
                        </div>
                    </div>

                </Modal>
            </div>
        </div>
    )
}

export default SearchInput;
