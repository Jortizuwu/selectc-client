import React from 'react'
import { Link } from 'react-router-dom'

export const ToSurvey = ({ title, to = '/' }) => {
  return (
    <div className="w-full bg-white shadow-lg border-green-300 border-2 rounded-lg p-2 mb-2 hover:shadow-sm transition-all">
      <Link to={to}>
        <div className="w-full">
          <p className="font-extralight">{title}</p>
          <span className="text-green-400 font-semibold">Ir a la encuesta</span>
        </div>
      </Link>
    </div>
  )
}
