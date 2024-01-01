// categorizing by top nearest places, and top rated places

import Category from "@/models/Category";

const CategoryListData: Array<Category> = [
    {
        id: 1,
        name: 'Nearest stores',
        value: 'nearest',
        icon: '/location.png'
    },
    {
        id: 2,
        name: 'Highly Rated',
        value: 'rating',
        icon: '/satisfaction.png'
    }
]

export default {
    CategoryListData
}