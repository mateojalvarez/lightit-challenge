import React from "react";

const CategoryOptions = ({
    categoryName,
    categoryOptions,
    showCategoryOptionItems,
    loading
}) => {
    return (
        <>
            <div className="text-gray-700 font-bold text-lg first-letter:uppercase">{categoryName}</div>
            {!loading && categoryOptions?.map((categoryOption, index) => (
                <div
                    key={index}
                    className="rounded-xl bg-white px-3 py-3 mt-3 shadow-sm flex justify-between items-center cursor-pointer"
                    onClick={() =>
                        showCategoryOptionItems(categoryOption.name, categoryOption.items)
                    }
                >
                    <div className="text-gray-500">{categoryOption.name}</div>
                    <div className="rotate-180">
                        <img
                            src="/img/assets/chevron.png"
                            alt="Arrow ilustration."
                            className="w-4"
                        />
                    </div>
                </div>
            ))}
            {loading && (
                <div className="text-gray-500 mt-3">Cargando opciones...</div>
            )}
        </>
    );
};

export default CategoryOptions;
