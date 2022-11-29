import React from 'react'
import { useSelector } from 'react-redux'

import Insights from '../../../shared/components/Insights'
import { Landing } from './components/Landing'
import Trending from './components/Trending'

const Home = () => {
  const { currentUser } = useSelector((state) => state.user)

  return (
    <>
      {currentUser
        ? (
          <section>
            <h1 className='text-2xl font-bold capitalize mb-4'>home</h1>
            <div className='grid gap-3 md:grid-cols-3'>
              <Insights />
              <Insights />
              <Insights />
            </div>
          </section>
          )
        : (
          <Landing />
          )}
      <Trending />
    </>
  )
}

export default Home
