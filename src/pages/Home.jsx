import React from 'react'
import { Banner, Comment, Consultancy, Recommendations, Testimonials } from '../components/home'

import {Filter} from '../components/common'
import Design from '../components/design/Design'

const Home = () => {

  const testimonalDescription = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl nec tincidunt luctus, nunc est lacinia nisl, nec ultricies nisl lorem eget nisl."
  return (
    <main className="bg-gray-100 w-full dark:bg-gray-900">
      <Banner />
      <div className='px-4 md:px-6 pt-6 pb-10 '>
        <Filter />
        <Comment />
        <Consultancy />
        <Recommendations />
        <Testimonials description={testimonalDescription} />
      </div>
     
      
      {/* 
      
      
      
       */}
    </main>
  )
}

export default Home