import React from "react";

const CategoryItem = ({item}) => {
    return (
        <div className="flex flex-col items-center">
            <img src={item.img} alt={item.name} className="w-32 h-32 shadow-sm"/>
            <div className="text-sm text-gray-500 mt-1">
                {item.name}
            </div>
        </div>
    )
};

export default CategoryItem;
