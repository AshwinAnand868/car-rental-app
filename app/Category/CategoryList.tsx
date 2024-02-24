'use client'
import React, { useEffect, useState } from 'react'
import CategoryItem from './CategoryItem'
import Category from '@/models/Category'
import CategoryData from '../Shared/CategoryData'
import BusinessList from '../BusinessList/BusinessList'

interface CategoryListProps {
    setSelectedCategory: (value: string) => void
}

const CategoryList = ({ setSelectedCategory }: CategoryListProps) => {

    const [category, setCategory] = useState<Category[]>();

    useEffect(() => {
        setCategory(CategoryData.CategoryListData);
    }, []);

    return (
        <div>
            {/* <h2 className='md:text-[1.2rem] text-[0.8rem] mt-3 font-bold mb-3'>Select Your category</h2> */}
            <div className='tw-flex tw-gap-6 tw-mb-3'>
                {category?.map(((item, index) => (
                    <div key={index} onClick={() => setSelectedCategory(item.value)}>
                        <CategoryItem {...item} />
                    </div>
                )))}
            </div>
        </div>
    )
}

export default CategoryList