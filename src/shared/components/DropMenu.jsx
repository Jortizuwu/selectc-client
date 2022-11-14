import React from 'react'
import { Link } from 'react-router-dom'

const DropMenu = () => {
  return (
    <div className='relative ml-3'>
      <div className='absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'>
        <Link to='/' className='block px-4 py-2 text-sm text-gray-700'>
          <h3>hola</h3>
        </Link>
      </div>
    </div>
  )
}

export default DropMenu
