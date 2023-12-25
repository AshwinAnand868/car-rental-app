'use client'
import React, { useEffect, useState } from 'react'
import CategoryItem from './CategoryItem'
import Category from '@/models/Category'
import CategoryData from '../Shared/CategoryData'
import BusinessList from '../BusinessList/BusinessList'

const CategoryList = () => {

    const [category, setCategory] = useState<Category[]>();

    useEffect(() => {
        setCategory(CategoryData.CategoryListData);
    }, []);

    return (
        <div>
            <h2 className='md:text-[1.5rem] text-[0.8rem] mt-3 font-bold mb-3'>Select Your category</h2>
            <div className='flex gap-6 mb-5'>
                {category?.map(((item, index) => (
                    <div key={index}>
                        <CategoryItem {...item} />
                    </div>
                )))}
            </div>
            {/* <BusinessList /> */}
        </div>
    )
}

export default CategoryList