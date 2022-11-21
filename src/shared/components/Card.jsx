import React from 'react'

import { UilBackpack } from '@iconscout/react-unicons'

const Card = ({ title, type }) => {
  return (
    <div className='rounded-3xl p-4 bg-white shadow-xl cursor-pointer'>
      <section className='flex items-center justify-between'>
        <div className='bg-blue-300 rounded-full w-12 h-12 flex items-center'>
          <UilBackpack className='text-center w-auto mx-auto' />
        </div>
        <div className='mt-3'>
          <h3 className='text-xs font-semibold'>{title}</h3>
          <h2 className='text-xl font-bold'>{type}</h2>
        </div>
      </section>
      <div className='flex justify-between flex-col'>
        {/* <Radar data={data} /> */}
      </div>
      {/* <small className='text-gray-300'>Last 24 hours</small> */}
    </div>
  )
}

export default Card
