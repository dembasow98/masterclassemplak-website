import React from 'react'
import { Banner, Comment, Consultancy, Recommendations, Testimonials } from '../components/home'

import {Filter} from '../components/common'

const Home = () => {

  const testimonalDescription = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl nec tincidunt luctus, nunc est lacinia nisl, nec ultricies nisl lorem eget nisl."
  return (
    <main className="bg-gray-100 mx-auto px-8 py-8  dark:bg-gray-900">
      <Banner />
      <Filter />
      <Comment />
      <Consultancy />
      <Recommendations />
      <Testimonials description={testimonalDescription} />
    </main>
  )
}

export default Home