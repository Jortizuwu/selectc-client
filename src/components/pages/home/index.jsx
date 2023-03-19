import React from 'react'

import Trending from './components/Trending'
import { Landing } from './components/Landing'

const Home = () => {
  return (
    <>
      <h1 className="text-2xl font-bold capitalize mb-4">Inicio</h1>
      <Landing />
      <Trending />
    </>
  )
}

export default Home
