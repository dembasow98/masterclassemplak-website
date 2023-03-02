import React from 'react'
import { Banner } from '../components/home'

import {Filter } from '../components/properties/forms'

const Home = () => {


  return (
    <main className="bg-gray-100 mx-auto px-8 py-8 dark:bg-gray-900">
      <Banner />
      <Filter />
      
    </main>
  )
}

export default Home