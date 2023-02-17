import React from 'react'
import { Link } from 'react-router-dom'
import { Topbar, Navbar, LandingSlider } from '../components/home'
import Languages from '../components/common/dropdown/Languages'

const Home = () => {
  return (
    <div className='flex w-full flex-col items-center justify-center h-screen bg-gray-100 dark:bg-gray-900'>
    <Languages />
  </div>

  )
}

export default Home