import React from 'react'
import { Link } from 'react-router-dom'

export const ToSurvey = ({ title, to = '/' }) => {
  return (
    <div className="w-full bg-white shadow-xl border-blue-300 border-2 rounded-lg p-2 mb-2 hover:shadow-sm transition-all">
      <Link to={to}>
        <div className="w-full">
          <p className="font-extralight">{title}</p>
          <span className="text-blue-300 font-semibold">Ir a la encuesta</span>
        </div>
      </Link>
    </div>
  )
}
