import React from 'react'

export const FieldError = ({ error }) => {
  return (
    <div className='bg-red-300 rounded-sm p-2 border-l-8 border-l-red-400'>
      <p className='text-white capitalize font-bold'>{error}</p>
    </div>
  )
}
