import React from 'react'
import { ToSurvey } from './ToSurvey'

const PreferenceCard = ({ name }) => {
  return (
    <div className='rounded-2xl border-2 border-green-300 p-4 hover:shadow-none transition-all bg-white shadow-lg'>
      <h3 className='font-bold capitalize'>{name}</h3>
    </div>
  )
}

export const PreferencesGrid = ({ prefrences }) => {
  return (
    <div className='mb-4'>
      <h2 className='mb-4 capitalize font-bold'>Preferencias</h2>
      {prefrences.length === 0
        ? (
          <ToSurvey
            title='Todavía no tienes preferencias'
            to='/surveys/preferences'
          />
          )
        : (
          <div className='grid grid-cols-2 md:grid-cols-3 gap-4'>
            {prefrences.map((val) => (
              <PreferenceCard name={val?.name} key={val?.preferenceID} />
            ))}
          </div>
          )}
    </div>
  )
}
