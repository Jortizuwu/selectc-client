import React from 'react'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js'
import { Bar } from 'react-chartjs-2'
import { ToSurvey } from './ToSurvey'

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top'
    },
    title: {
      display: true,
      text: 'Professional activities depending on the vocational survey'
    }
  },
  scales: {
    y: {
      suggestedMin: 0,
      suggestedMax: 10
    }
  }
}

export const Activities = ({ data }) => {
  return (
    <div className='mb-4'>
      <h2 className='mb-4 capitalize font-bold'>Professional activities</h2>
      {data.datasets[0].data.length === 0
        ? (
          <ToSurvey
            title="You don't have professional activities yet"
            to='/surveys/vocational'
          />
          )
        : (
          <div className='rounded-3xl p-4 bg-white shadow-xl'>
            <Bar options={options} data={data} />
          </div>
          )}
    </div>
  )
}
