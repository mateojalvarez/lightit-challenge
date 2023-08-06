import React from 'react'

const ActiveBackgroundComponent = ({ className, translateY }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="100"
            height="104"
            fill="none"
            viewBox="0 0 90 104"
            className='sidebar-active-nav'
            style={{
                transform : `scale(2.1,1.3)`
            }}
        >
            <path
                fill="#f7f7f7"
                fillRule="evenodd"
                d="M72 25V0c0 13.807-11.193 25-25 25H0v54h47c13.807 0 25 11.193 25 25V25z"
                clipRule="evenodd"
            ></path>
        </svg>
    )
}

export default ActiveBackgroundComponent