import React from 'react'

const Trending = () => {
  return (
    <div className='recent-oders'>
      <h2 className='text-2xl font-bold capitalize mb-4'>tendencias</h2>
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Universidad</th>
            <th>Pago</th>
            <th>referencia min</th>
            <th>referencia max</th>
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
