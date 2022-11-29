import React from 'react'
import Insights from '../../../../shared/components/Insights'

export const Test = () => {
  return (
    <>
      <h2 className='mb-4 capitalize font-bold'>Possible university careers</h2>
      <div className='grid gap-3 md:grid-cols-3'>
        <Insights />
        <Insights />
        <Insights />
      </div>
    </>
  )
}
