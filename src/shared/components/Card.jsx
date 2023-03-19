import React from 'react'

import { UilBackpack } from '@iconscout/react-unicons'
import { Link } from 'react-router-dom'

const Card = ({ title, type, to = '/' }) => {
  return (
    <Link
      to={to}
      className="rounded-3xl p-4 bg-white shadow-xl cursor-pointer hover:shadow-none transition-all"
    >
      <section className="flex items-center justify-between">
        <div className="bg-blue-300 rounded-full w-12 h-12 flex items-center">
          <UilBackpack className="text-center w-auto mx-auto" />
        </div>
        <div className="mt-3">
          <h3 className="text-xs font-semibold">{title}</h3>
          <h2 className="text-sm md:text-xl font-bold">{type}</h2>
        </div>
      </section>
      <div className="text-gray-500 text-xs md:text-base">
        <span>Encuesta para conocer su {type}</span>
        <p className="text-red-400">
          Si ya ha realizado esta encuesta y la vuelve a hacer, los datos de la
          anterior encuesta se sobrescribirá
        </p>
      </div>
    </Link>
  )
}

export default Card
