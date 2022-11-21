import React from 'react'
import { useSelector } from 'react-redux'
import Insights from '../../../shared/components/Insights'

import Trending from './components/Trending'

const Home = () => {
  const { currentUser } = useSelector((state) => state.user)

  return (
    <>
      {currentUser && (
        <section>
          <h1 className='text-2xl font-bold capitalize'>home</h1>
          <div className='grid gap-3 grid-cols-3'>
            <Insights />
            <Insights />
            <Insights />
          </div>
        </section>
      )}
      <Trending />
    </>
  )
}

export default Home
