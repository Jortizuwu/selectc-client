import React from 'react'
import Card from '../../../shared/components/Card'

const Surveys = () => {
  return (
    <div>
      <h2 className='font-bold capitalize mb-3'>Encuestas</h2>
      <div className='grid md:grid-cols-2 gap-3'>
        <Card title='Encuesta 1' type='Personalidad' to='personality' />
        <Card title='Encuesta 2' type='Preferencias' to='preferences' />
        <Card title='Encuesta 3' type='Vocacion' to='vocational' />
      </div>
    </div>
  )
}

export default Surveys
