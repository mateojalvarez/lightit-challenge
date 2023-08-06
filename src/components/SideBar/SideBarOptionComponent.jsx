import React from 'react'

const SideBarOptionComponent = ({ name, icon, handleSelectOption }) => {

    return (
        <div className='sidebar-option'>
            <img src={icon} alt={name} className='w-10' onClick={(event) => handleSelectOption(event, name)}/>
            <div className='text-xs text-gray-500'>
                {name}
            </div>
        </div>
    )
}

export default SideBarOptionComponent