import React from 'react'
import DropdownButton from '../DropdownButton/DropdownButton'
import Logo from '../Logo/Logo'


const NavBar = () => {
    return (
        <div style={{
            backgroundColor: '#333',
        }} className='min-w-full h-md flex flex-row py-2 px-40 justify-between items-center'>
            <Logo/>
            <DropdownButton/>
        </div>
    )
}

export default NavBar