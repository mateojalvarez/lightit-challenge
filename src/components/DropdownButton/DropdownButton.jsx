import React, { useState } from 'react'

const options = [
    'Guardar y salir',
    'Salir sin guardar',
    'Guardar y continuar'
];

const DropdownButton = () => {

    const [isOpen, setIsOpen] = useState(false);
    const [optionSelected, setOptionSelected] = useState('Guardar y salir');

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    const handleSelectOption = (option) => {
        setOptionSelected(option);
        handleToggle();
    }

    return (
        <div className="relative inline-flex bg-white border rounded-md max-h-10">
            <div
                className="dropdown-selected"
                onClick={handleToggle}
            >
                {optionSelected}
            </div>

            <div>
                <button
                    type="button"
                    className="inline-flex items-center justify-center h-full px-2 text-gray-600 border-l border-gray-100 cursor-pointer hover:text-gray-700 rounded-r-md hover:bg-gray-50"
                    onClick={handleToggle}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-4 h-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M19 9l-7 7-7-7"
                        />
                    </svg>
                </button>

            </div>
            {isOpen && (
                <div className="absolute top-8 right-0 z-10 w-56 mt-4 origin-top-right bg-white border border-gray-100 rounded-md shadow-lg">
                    <div className="p-2">
                        {options.map((option, index) => (
                            <div key={index} className='dropdown-option' onClick={() => handleSelectOption(option)}>
                                {option}
                            </div>
                        ))}
                    </div>
                </div>)}
        </div>
    )
}

export default DropdownButton