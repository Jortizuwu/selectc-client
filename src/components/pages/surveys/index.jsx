import React from 'react'
import Card from '../../../shared/components/Card'

const Surveys = () => {
  return (
    <div>
      <h2 className='font-bold capitalize'>Surveys</h2>
      <div className='grid grid-cols-3 gap-3'>
        <Card title='survey 1' type='student' />
        <Card title='survey 2' type='student' />
        <Card title='survey 3' type='student' />
      </div>
    </div>
  )
}

export default Surveys
