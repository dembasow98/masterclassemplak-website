import React from 'react'
import { Banner } from '../components/common'
import banner from '../assets/images/about/banner.jpg'
import {Info} from '../components/about'

//Import about data
import data from '../data/about/data.json'

const About = () => {
  const about = data.about

  return (
    <main className="w-full h-full bg-black">
      <Banner 
          title = "WHO ARE WE?" 
          image={banner} 
          description="Master Class Emlak Heroes"
        />
      <Info
        title={about.title}
        overview1={about.overview1}
        banner={about.banner}
        overview2={about.overview2}
        details={about.heroes}
      />
    </main>
  )
}

export default About