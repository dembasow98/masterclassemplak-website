import React from 'react'
import { Link } from 'react-router-dom'
import { Topbar, Navbar, Banner } from '../components/home'
import Languages from '../components/common/dropdown/Languages'

const Home = () => {
  return (
    <main className='flex items-center justify-center'>
      <Banner/>
    </main>
  )
}

export default Home