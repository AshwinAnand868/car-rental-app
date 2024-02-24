import Category from '@/models/Category';
import Image from 'next/image';
import React from 'react'

const CategoryItem = ({
    id,
    name,
    value,
    icon,
}: Category) => {
    return (
        <div className='tw-flex tw-flex-col tw-items-center tw-bg-gray-100 md:tw-p-3 tw-p-2 tw-rounded-2xl hover:tw-scale-105 tw-transition-all tw-duration-100 tw-cursor-pointer'>
            <Image src={icon}
                alt={name}
                height={30}
                width={30} 
            />
            <h2 className='tw-text-[9.5px] md:tw-text-[12px] tw-font-bold'>{name}</h2>
        </div>
    )
}

export default CategoryItem;