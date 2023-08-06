import React from "react";

const ArrowTool = ({ handleToolClick }) => {
    return (
        <div className="fixed bottom-8 right-8 flex">
            <div className="h-20 w-20 py-1 bg-white rounded-lg shadow-sm flex flex-col items-center justify-between relative">
                <img
                    src="/img/assets/arrow.png"
                    alt="Up arrow."
                    className="w-7 cursor-pointer"
                    onClick={(event) => handleToolClick(event)}
                />
                <img
                    src="/img/assets/arrow.png"
                    alt="Left arrow."
                    className="w-7 absolute left-1 top-1/3 -rotate-90 cursor-pointer"
                    onClick={(event) => handleToolClick(event)}
                />
                <img
                    src="/img/assets/arrow.png"
                    alt="Right arrow."
                    className="w-7 absolute right-1 top-1/3 rotate-90 cursor-pointer"
                    onClick={(event) => handleToolClick(event)}
                />
                <img
                    src="/img/assets/arrow.png"
                    alt="Down arrow."
                    className="w-7 rotate-180 cursor-pointer"
                    onClick={(event) => handleToolClick(event)}
                />
            </div>
        </div>
    );
};

export default ArrowTool;
