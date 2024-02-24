import Address from '@/models/Address'
import Image from 'next/image'
import React from 'react'

interface BusinessItemProps {
  store: Address
}

const BusinessItem = ({store}: BusinessItemProps) => {
  return (
<div className='tw-flex tw-gap-4 tw-p-1 md:tw-p-2
    tw-border-b tw-border-gray-300 tw-mb-1 tw-items-center'>
      <Image src={store?.image?.url!}
        alt='Business Image'
        width={60}
        height={60}
        className='tw-rounded-xl
            tw-object-contain tw-h-[50px] tw-w-[50px] md:tw-h-[90px] md:tw-w-[90px]'
      />
      <div>
        <h2 className='md:tw-text-[1rem] tw-text-[0.9rem] tw-font-semibold'>{store.name}</h2>
        <h2 className='md:tw-text-[0.9rem] tw-text-[0.7rem] tw-text-gray-500'>{store.location}</h2>
        <div className='tw-flex tw-gap-1 md:tw-gap-2 tw-items-center'>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="tw-w-5 tw-h-4 md:tw-h-5 tw-text-yellow-300">
            <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
          </svg>
          <span className='md:tw-text-[0.8rem] tw-text-[0.7rem] tw-font-serif'>{store.rating}</span>
        </div> 
      </div>
    </div>
  )
}

export default BusinessItem