import React from 'react'

const ActionButtons = ({handleToolClick}) => {
  return (
    <div className="fixed top-28 right-8 flex z-10">
        <div className='btn-white mr-4' onClick={(event) => handleToolClick(event, 'Fijar')}>
            Fijar
        </div>
        <div className='btn-white' onClick={(event) => handleToolClick(event, 'Borrar')}>
            Borrar
        </div>
    </div>
  )
}

export default ActionButtons