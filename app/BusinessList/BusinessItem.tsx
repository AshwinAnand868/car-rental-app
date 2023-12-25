import Image from 'next/image'
import React from 'react'

const BusinessItem = () => {
  return (
    <div className='flex gap-4 p-1 md:p-3 
    border-b border-gray-300 mb-4 items-center'>
      <Image src='/placeholder.jpg'
        alt='business-image'
        width={60}
        height={60}
        className='rounded-xl
            object-cover h-[50px] w-[50px] md:h-[90px] md:w-[90px]'
      />
      <div>
        <h2 className='md:text-[1.5rem] text-[0.9rem] font-semibold'>Business Name</h2>
        <h2 className='md:text-[1rem] text-[0.7rem] text-gray-500'>Address</h2>
        <div className='flex gap-1 md:gap-2 items-center'>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-4 md:h-5 text-yellow-300">
            <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
          </svg>
          <span className='md:text-[1rem] text-[0.7rem] font-bold'>4.5</span>
        </div> 
      </div>
    </div>
  )
}

export default BusinessItem