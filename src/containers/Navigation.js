import React, { useState, useEffect } from 'react'

import { Link } from 'react-router-dom'

import logo_dark from '../assets/images/logos/logo-dark.png'
import logo_light from '../assets/images/logos/logo-light.png'


const Navigation = () => {
  //topbar h-24
  const [navbarFixed, setNavbarFixed] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 24) {
        setNavbarFixed(true);
      } else {
        setNavbarFixed(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  //Menu
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav 
    className={`${navbarFixed ? 'fixed top-0 left-0 right-0 bg-[#003032] shadow-md z-50 ' : 'relative'
    } flex w-full h-20 bg-[#003032]  text-white items-center  px-4 py-3`}>
        <div className='MENU flex items-center md:justify-between  w-full h-fit left-2'>
          <div className="LOGO flex flex-col items-center w-48">
            <img src={logo_light} alt="logo" className="w-10" />
            <span className="text-sm md:text-base font-bold rounded-md ml-2 ">Masterclass <span className='bg-yellow-900'>Emlak</span></span>
          </div>
          <div className='md:hidden flex w-full justify-end'>
            <button
              data-collapse-toggle="navbar-sticky" type="button"
              aria-controls="navbar-sticky" aria-expanded="false" aria-label="Toggle navigation"
              className="block items-center px-2 py-1 border rounded text-gray-700 dark:text-yellow-900 border-yellow-800 hover:text-yellow-600 hover:border-yellow-600"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <svg
                className={`w-8 ${menuOpen ? 'hidden' : 'block'}`}
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path

                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                />
              </svg>
              <svg
                className={`w-8 ${menuOpen ? 'block' : 'hidden'}`}
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M14.95 5.364a1 1 0 10-1.414-1.414L5.636 13.95a1 1 0 001.414 1.414L14.95 5.364zM6.05 5.364a1 1 0 011.414-1.414L14.364 13.95a1 1 0 00-1.414 1.414-1.414L6.05 5.364z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
          
          <div className={`MENU-ITEMS md:inline-flex  items-center sticky-top  ${menuOpen ? 'block' : 'hidden'}`}>
            <ul className='md:flex md:flex-row  md:gap-6  lg:gap-10 xl:gap-12 2xl:gap-16'>
              <li className='flex flex-col  items-center'>
                <Link to="/" onClick={() => setMenuOpen(false)} >Home</Link>
              </li>
              <li className='flex flex-col items-center'>
                <Link to="/about" onClick={() => setMenuOpen(false)}>About</Link>
              </li>
              <li className='flex flex-col items-center'>
                <Link to="/properties" onClick={() => setMenuOpen(false)}>Properties</Link>
              </li>
              <li className='flex flex-col items-center'>
                <Link to="/news" onClick={() => setMenuOpen(false)}>News</Link>
              </li>
              <li className='flex flex-col items-center'>
                <Link to="/blogs" onClick={() => setMenuOpen(false)}>Blogs</Link>
              </li>
              <li className='flex flex-col items-center'>
                <Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
              </li>
            </ul>
            
          </div>
        </div>
    </nav>
  )
}
export default Navigation