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
        <div className='flex flex-col items-center bg-gray-100 md:p-3 p-2 rounded-2xl hover:scale-105 transition-all duration-100 cursor-pointer'>
            <Image src={icon}
                alt={name}
                height={30}
                width={30} 
            />
            <h2 className='text-[9.5px] md:text-[12px] font-bold'>{name}</h2>
        </div>
    )
}

export default CategoryItem;