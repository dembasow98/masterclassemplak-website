import React from 'react'
import { Link } from 'react-router-dom'
import { Topbar, Navbar, LandingSlider } from '../components/home'

const Home = () => {
  return (
    <div className="home">
      <Topbar />
      <Navbar />
      <LandingSlider />
    </div>

  )
}

export default Home