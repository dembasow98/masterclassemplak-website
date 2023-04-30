import React from 'react'
import {Home, Blogs, Blog, Contact, About, Properties,Property, News, New} from  '../../../pages'

import {Routes, Route } from 'react-router-dom'
//import design from components/design/Design
import Design from '../../../components/design/Design'



const Content = () => {
  return (
    <div className="content">
      <Design />
      <div className="content-wrapper top-0 left-0 right-0 bottom-0">
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
      </div>
    </div>
  )
}

export default Content;