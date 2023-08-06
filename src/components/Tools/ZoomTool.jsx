import React from 'react'

const ZoomTool = ({handleToolClick}) => {
    return (
        <div className="fixed bottom-8 right-34 flex">
            <div className="h-20 w-10 py-1.5 bg-white rounded-lg shadow-sm flex flex-col items-center justify-between">
                <img src="/img/assets/+.png" alt="Plus icon." className="w-7 cursor-pointer" onClick={(event) => handleToolClick(event)} />
                <hr className="w-4/5 mt-1 border-t-2 border-white-f3 rounded-lg box-content" />
                <img src="/img/assets/-.png" alt="Minus icon." className="w-7 cursor-pointer" onClick={(event) => handleToolClick(event)} />
            </div>
        </div>
    )
}

export default ZoomTool