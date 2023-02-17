import React from 'react'
import {Home, Blogs, Contact, About, Properties, News} from  '../../../pages'

import {Routes, Route } from 'react-router-dom'

const Content = () => {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/properties" element={<Properties />} />
        <Route path="/news" element={<News />} />
      </Routes>
    </main>
  )
}

export default Content;