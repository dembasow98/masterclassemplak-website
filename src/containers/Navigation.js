import React from 'react'

import { Link } from 'react-router-dom'

const Navigation = () => {
  return (
    <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/properties">Properties</Link>
        <Link to="/news">News</Link>
        <Link to="/blogs">Blogs</Link>
        <Link to="/contact">Contact</Link>
    </nav>
  )
}

export default Navigation