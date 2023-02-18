import React from 'react'
import {Link} from 'react-router-dom'

const Image = ({ title, source, description, tags }) => {

    //Function to convert the title to a slug
    const slugify = (string) => {
        return string
            .toString()
            .toLowerCase()
            .replace(/\s+/g, "-") // Replace spaces with -
            .replace(/[^\w-]+/g, "") // Remove all non-word chars
            .replace(/--+/g, "-") // Replace multiple - with single -
            .replace(/^-+/, "") // Trim - from start of text
            .replace(/-+$/, ""); // Trim - from end of text
    };

  return (
    <div className="carousel-item active relative float-left w-full">
        <img
            src={source}
            className="block w-full"
            alt="..."
        />
        
        <div className="carousel-caption hidden  top-10  md:block absolute text-center">
            <h5 className="text-xl bg-black bg-opacity-10 ">
                {title}
            </h5>
            <p className='bg-black bg-opacity-10 '>
                {description}
                {tags.map((tag, index) => (
                    <span key={index} className="inline-block px-2 py-1 text-xs font-semibold leading-tight text-gray-700 bg-gray-200 rounded-full dark:bg-gray-700 dark:text-gray-200">
                        #{tag}
                    </span>
                ))}
            </p>
        </div>
        <div className="carousel-caption hidden md:block absolute text-center">
            <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br  from-red-900 to-pink-700 bg-red-900 group-hover:from-pink-700 group-hover:to-red-900 hover:text-white dark:text-white focus:outline-none">
                <Link to={`/properties/${slugify(title)}`} className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                   CHECKOUT NOW!
                </Link>
            </button>
        </div>
    </div>
  )
}

export default Image