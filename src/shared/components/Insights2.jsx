import React from 'react'
import { Pie } from 'react-chartjs-2'

import { UilBackpack } from '@iconscout/react-unicons'

import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
  ArcElement,
} from 'chart.js'

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
  ArcElement
)

const Insights = ({ careers, careers2, title, title2 }) => {
  return (
    <section className="grid grid-cols-2 gap-4">
      <div className="rounded-3xl p-4 bg-white shadow-lg">
        <section className="flex items-center justify-between">
          <div className="bg-green-300 rounded-full w-12 h-12 flex items-center">
            <UilBackpack className="text-center w-auto mx-auto" />
          </div>
          <div className="mt-3">
            <h2 className="text-md font-bold">{title}</h2>
          </div>
        </section>
        <Pie data={careers} />
      </div>
      <div className="rounded-3xl p-4 bg-white shadow-lg">
        <section className="flex items-center justify-between">
          <div className="bg-green-300 rounded-full w-12 h-12 flex items-center">
            <UilBackpack className="text-center w-auto mx-auto" />
          </div>
          <div className="mt-3">
            <h2 className="text-md font-bold">{title2}</h2>
          </div>
        </section>
        <Pie data={careers2} />
      </div>
    </section>
  )
}

export default Insights
