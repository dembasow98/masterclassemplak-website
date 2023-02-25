import React from 'react'
import {Home, Blogs, Contact, About, Properties, News, Property} from  '../../../pages'

import {Routes, Route } from 'react-router-dom'



const Content = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/blogs" element={<Blogs />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/about" element={<About />} />
      <Route path="/properties" element={<Properties />}/>
      <Route path="/properties/:slug" element={<Property />} />
      <Route path="/news" element={<News />} />
    </Routes>
  )
}

export default Content;