import React, { useState } from "react";
import CategoryOptions from "./CategoryOptions";
import CategoryItemsContainer from "./CategoryItemsContainer";

const CategoryContainer = ({ categoryName, categoryOptions, loading, showOptions, setShowOptions }) => {
    const [itemSelectedName, setItemSelectedName] = useState('')
    const [items, setItems] = useState({});

    const showCategoryOptionItems = (itemName,items) => {
        setItemSelectedName(itemName);
        setItems(items);
        setShowOptions(false);
    };

    const hideCategoryOptionItems = () => {
        setShowOptions(!showOptions);
    }

    return (
        <>
            {showOptions && (
                <CategoryOptions
                    categoryName={categoryName}
                    categoryOptions={categoryOptions}
                    showCategoryOptionItems={showCategoryOptionItems}
                    loading={loading}
                />
            )}
            {!showOptions && (
                <CategoryItemsContainer
                    categoryName={categoryName}
                    itemName={itemSelectedName}
                    items={items}
                    hideCategoryOptionItems={hideCategoryOptionItems}
                    loading={loading}
                />
            )}
        </>
    );
};

export default CategoryContainer;
