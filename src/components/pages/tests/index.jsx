import React from 'react'
import Card from '../../../shared/components/Card'

const TestV = () => {
  return (
    <div>
      <h2 className='font-bold capitalize'>Surveys</h2>
      <div className='grid grid-cols-3 gap-3'>
        <Card title='test 1' type='student' />
        <Card title='test 2' type='student' />
        <Card title='test 3' type='student' />
      </div>
    </div>
  )
}

export default TestV
