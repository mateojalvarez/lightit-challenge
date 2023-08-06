import React from 'react'
import CategoryItem from './CategoryItem'

const CategoryItemsContainer = ({ categoryName, itemName, items, hideCategoryOptionItems }) => {
    return (
        <>
            <div className='flex items-center text-xs cursor-pointer' onClick={hideCategoryOptionItems}>
                <img src="/img/assets/chevron.png" alt="Back arrow." className='w-3 h-3 mr-1'/>
                <span className="text-gray-500 first-letter:uppercase">{categoryName}</span>
            </div>
            <div className="text-gray-500 font-bold text-lg mt-3 mb-3">{itemName}</div>
            <div className='grid grid-cols-3 gap-3'>
                {items?.map((item, index) => (
                    <div key={index}>
                        <CategoryItem item={item}/>
                    </div>
                ))}
            </div>
        </>
    )
}

export default CategoryItemsContainer