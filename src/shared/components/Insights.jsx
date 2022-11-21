import React from 'react'
import { Radar } from 'react-chartjs-2'

import { UilBackpack } from '@iconscout/react-unicons'

import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
} from 'chart.js'

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
)

const data = {
  labels: [
    'carrera 1',
    'carrera 2',
    'carrera 3',
    'carrera 4',
    'carrera 5',
    'carrera 6'
  ],
  datasets: [
    {
      label: 'posible carrera',
      data: [2, 9, 3, 5, 2, 3],
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
      borderColor: 'rgba(255, 99, 132, 1)',
      borderWidth: 1
    }
  ]
}

const Insights = () => {
  return (
    <div className='rounded-3xl p-4 bg-white shadow-xl'>
      <section className='flex items-center justify-between'>
        <div className='bg-blue-300 rounded-full w-12 h-12 flex items-center'>
          <UilBackpack className='text-center w-auto mx-auto' />
        </div>
        <div className='mt-3'>
          <h3 className='text-xs font-semibold'>Posible Carrera</h3>
          <h2 className='text-xl font-bold'>coincidencia </h2>
        </div>
      </section>
      <div className='flex justify-between flex-col'>
        <Radar data={data} />
      </div>
      {/* <small className='text-gray-300'>Last 24 hours</small> */}
    </div>
  )
}

export default Insights
