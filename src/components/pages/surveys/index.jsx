import React from 'react'
import Card from '../../../shared/components/Card'

const Surveys = () => {
  return (
    <div>
      <h2 className='font-bold capitalize mb-3'>Surveys</h2>
      <div className='grid grid-cols-2 gap-3'>
        <Card title='survey 1' type='Personality' to='personality' />
        <Card title='survey 2' type='Preferences' to='preferences' />
      </div>
    </div>
  )
}

export default Surveys
