import React from 'react'
import {Home, Blogs, Blog, Contact, About, Properties,Property, News, New} from  '../../../pages'

import {Routes, Route } from 'react-router-dom'


const Content = () => {
  return (

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/blogs/:slug" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/properties" element={<Properties />}/>
          <Route path="/properties/:slug" element={<Property />} />
          <Route path="/news" element={<News />} />
          <Route path="/new/:slug" element={<New />} />
        </Routes>
  )
}

export default Content;