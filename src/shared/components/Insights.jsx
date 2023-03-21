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
  Legend,
} from 'chart.js'

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
)

const Insights = ({ careers }) => {
  return (
    <div className="col-span-2 rounded-3xl p-4 bg-white shadow-lg">
      <section className="flex items-center justify-between">
        <div className="bg-green-300 rounded-full w-12 h-12 flex items-center">
          <UilBackpack className="text-center w-auto mx-auto" />
        </div>
        <div className="mt-3">
          <h3 className="text-xs font-semibold">Posible Carrera</h3>
          <h2 className="text-xl font-bold">{careers?.possible} </h2>
        </div>
      </section>
      <div className="flex justify-between flex-col">
        <Radar data={careers} />
      </div>
      {/* <small className='text-gray-300'>Last 24 hours</small> */}
    </div>
  )
}

export default Insights
