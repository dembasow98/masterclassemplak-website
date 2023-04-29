import React from 'react'
import { Banner } from '../components/common'
import banner from '../assets/images/banner/banner3.png'
import {Info} from '../components/about'

//Import about data
import data from '../data/about/data.json'

const About = () => {
  const about = data.about

  return (
    <main className="w-full h-full bg-gray-100 dark:bg-gray-900 ">
      <Banner 
          title = "WHO ARE WE?" 
          image={banner} 
          description="Master Class Emlak Heroes"
        />
      <Info
        title={about.title}
        banner={about.banner}
        overview={about.overview}
        details={about.heroes}
      />
    </main>
  )
}

export default About