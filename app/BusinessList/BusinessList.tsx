import React, { useState } from 'react'
import BusinessItem from './BusinessItem';
import Address from '@/models/Address';

interface BusinessListProps {
    businessListData: Address[]
}

const BusinessList = ({businessListData}: BusinessListProps) => {

    const [count, setCount] = useState<number>(0);

    return (
        <div>
            <h2 className='md:text-[1.5rem] text-[0.8rem] mt-3 font-bold mb-3 flex items-center justify-between'>Nearest Stores
                <span className='flex md:gap-3 sm:gap-2'>
                    {count > 0 ? 
                        <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        fill="none" viewBox="0 0 24 24" 
                        strokeWidth={1.5} stroke="currentColor" 
                        className="w-10 md:h-10 h-8 p-2 hover:bg-gray-100 cursor-pointer rounded-lg"
                        onClick={() => setCount(count - 3)}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                        </svg> : null}
                    {count != (businessListData.length - 3) ? <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none" viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-10 md:h-10 h-8 p-2 hover:bg-gray-100 cursor-pointer rounded-lg"
                        onClick={() => setCount(count + 3)}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                    </svg> : null}
                </span>
            </h2>
            <div>
                {businessListData.map((addr: Address, index: number) =>
                index >= count && index < count + 3 && ( // to show 3 stores at first
                    <div>
                        <BusinessItem store={addr}/>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default BusinessList;