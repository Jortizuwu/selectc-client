import React from 'react'

const Trending = () => {
  return (
    <div className='recent-oders text-xs md:text-base mt-3'>
      <h2 className='text-2xl font-bold capitalize mb-4'>Tendencias</h2>
      <table className='overflow-x-auto overflow-hidden p-2'>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Universidad</th>
            <th>Precio por semestre</th>
            <th>puntaje mínimo</th>
            <th>puntaje máximo</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>ING Sistemas</td>
            <td>Unicor</td>
            <td>100,000,000$</td>
            <td className='warning'>323</td>
            <td className='primary'>500</td>
          </tr>
          <tr>
            <td>ING Sistemas</td>
            <td>Unicor</td>
            <td>100,000,000$</td>
            <td className='warning'>323</td>
            <td className='primary'>500</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Trending
