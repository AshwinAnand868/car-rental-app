import React, { useState } from 'react'
import BusinessItem from './BusinessItem';

const BusinessList = () => {

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
                        onClick={() => setCount(count - 1)}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                        </svg> : null}
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none" viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-10 md:h-10 h-8 p-2 hover:bg-gray-100 cursor-pointer rounded-lg"
                        onClick={() => setCount(count + 1)}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                    </svg>
                </span>
            </h2>
            <div>
                <BusinessItem />
                <BusinessItem />
            </div>
        </div>
    )
}

export default BusinessList;