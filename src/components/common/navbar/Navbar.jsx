import React, {useRef, useState, useEffect } from "react";
import { Transition } from "@headlessui/react";
import { Link } from 'react-router-dom'

import logo from '../../../assets/images/logos/logo1.png'



function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);

  const [navbarFixed, setNavbarFixed] = useState(false);


  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 100) {
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

  return (
      <nav className={`${navbarFixed ?"fixed top-0 left-0 right-0 shadow-md z-50":"relative"} bg-[#043334] `}>
        <div className="max-w-7xl mx-auto px-4 py-3 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center md:justify-between md:w-full ">
              <div className="flex-shrink-0 justify-center">
                <img src={logo} alt="logo" className="w-24 md:w-28 lg:w-32" />
              </div>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4  md:flex md:flex-row  md:gap-6  lg:gap-10 xl:gap-12 2xl:gap-16">
                  <Link
                    onClick={() => setMenuOpen(false)}
                    to="/"
                    className=" text-gray-300 dark:hover:bg-[#014649] hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Home
                  </Link>

                  <Link
                    to="/about" onClick={() => setMenuOpen(false)}
                    className="text-gray-300 dark:hover:bg-[#014649] hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    About
                  </Link>

                  <Link
                    to="/properties" onClick={() => setMenuOpen(false)}
                    className="text-gray-300 dark:hover:bg-[#014649] hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Properties
                  </Link>

                  <Link
                    to="/news" onClick={() => setMenuOpen(false)}
                    className="text-gray-300 dark:hover:bg-[#014649] hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    News
                  </Link>

                  <Link
                    to="/blogs" onClick={() => setMenuOpen(false)}
                    className="text-gray-300 dark:hover:bg-[#014649] hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Blogs
                  </Link>
                  
                  <Link
                    to="/contact" onClick={() => setMenuOpen(false)}
                    className="text-gray-300 dark:hover:bg-[#014649] hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Contact
                  </Link>
                </div>
              </div>
            </div>
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                data-collapse-toggle="navbar-sticky" type="button"
                aria-controls="navbar-sticky" aria-expanded="false" aria-label="Toggle navigation"
                className="block items-center px-2 py-1 border rounded text-gray-700 dark:text-yellow-900 border-yellow-800 hover:text-yellow-600 hover:border-yellow-600"
              >
                <span className="sr-only">Open main menu</span>
                {!menuOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        <Transition
          show={menuOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {(ref) => (
            <div className="md:hidden" id="mobile-menu">
              <div ref= {(node) =>ref.current = node } className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <Link
                  to="/" onClick={() => setMenuOpen(false)} 
                  className="text-gray-300 dark:hover:bg-[#014649] hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Home
                </Link>

                <Link
                  to="/about" onClick={() => setMenuOpen(false)}
                  className="text-gray-300 dark:hover:bg-[#014649] hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  About
                </Link>

                <Link
                    to="/properties" onClick={() => setMenuOpen(false)}
                  className="text-gray-300 dark:hover:bg-[#014649] hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Properties
                </Link>

                <Link
                  to = "/news" onClick={() => setMenuOpen(false)}
                  className="text-gray-300 dark:hover:bg-[#014649] hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  News
                </Link>

                <Link
                  to="/blogs" onClick={() => setMenuOpen(false)}
                  className="text-gray-300 dark:hover:bg-[#014649] hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Blogs
                </Link>
                <Link
                  to="/contact" onClick={() => setMenuOpen(false)}
                  className="text-gray-300 dark:hover:bg-[#014649] hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Contact
                </Link>
              </div>
            </div>
          )}
        </Transition>
      </nav>
  );
}

export default Navbar;
