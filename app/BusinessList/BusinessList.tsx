import React, { useContext, useEffect, useState } from 'react'
import BusinessItem from './BusinessItem';
import Address from '@/models/Address';
import BusinessItemSkelton from './BusinessItemSkeleton';
import { SelectedBusinessContext } from '@/context/SelectedBusinessContext';
import SelectedBusinessContextType from '@/context-models/SelectedBusinessContextType';

interface BusinessListProps {
    selectedCategory: string,
    businessListData: Address[]
}

const BusinessList = ({selectedCategory, businessListData}: BusinessListProps) => {

    const [count, setCount] = useState<number>(0);
    const [loading, setIsLoading] = useState<boolean>(true); 
    const { selectedBusiness, setSelectedBusiness } = useContext(SelectedBusinessContext) as SelectedBusinessContextType;

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 300);
    }, []);

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setIsLoading(false);
        }, 300);
        setCount(0);
    }, [businessListData]);

    return (
        <div className='tw-mt-6'>
            <h2 className='md:tw-text-[1.2rem] tw-text-[0.8rem] tw-font-bold tw-flex tw-items-center tw-justify-between'>{selectedCategory}
                <span className='tw-flex md:tw-gap-3 sm:tw-gap-2'>
                    {count > 0 ? 
                        <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        fill="none" viewBox="0 0 24 24" 
                        strokeWidth={1.5} stroke="currentColor" 
                        className="tw-w-10 md:tw-h-9 tw-h-8 tw-p-2 hover:tw-bg-gray-100 tw-cursor-pointer tw-rounded-lg"
                        onClick={() => setCount(count - 3)}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                        </svg> : null}
                    {count != (businessListData.length - 3) ? <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none" viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="tw-w-10 md:tw-h-9 tw-h-8 tw-p-2 hover:tw-bg-gray-100 tw-cursor-pointer tw-rounded-lg"
                        onClick={() => setCount(count + 3)}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                    </svg> : null}
                </span>
            </h2>
            <div>
                {!loading ? 
                businessListData.map((addr: Address, index: number) =>
                    index >= count && index < count + 3 && ( // to show 3 stores at first
                    <div key={index} className='tw-cursor-pointer'
                    onClick={() => setSelectedBusiness(addr)}>
                        <BusinessItem store={addr}/>
                    </div>
                )) : 
                [1,2,3].map((item, index) => (
                    <BusinessItemSkelton key={index}/>
                ))}
            </div>
            
        </div>
    )
}

export default BusinessList;