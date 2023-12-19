// categorizing by top nearest places, and top rated places

import Category from "@/models/Category";

const CategoryListData: Array<Category> = [
    {
        id: 1,
        name: 'Nearest stores',
        value: 'nearest_locations',
        icon: '/location.png'
    },
    {
        id: 2,
        name: 'Highly Rated',
        value: 'rated_locations',
        icon: '/satisfaction.png'
    }
]

export default {
    CategoryListData
}