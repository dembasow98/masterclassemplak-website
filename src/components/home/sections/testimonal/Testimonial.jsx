import React from 'react'
import ReactCountryFlag from 'react-country-flag'

const Testimonial = ({fullName, profilePicture, content, countryCode, countryName}) => {
  

    return (
    <div className='w-full my-4 flex'>
        <figure className="max-w-screen-md mx-auto text-center">
            <svg aria-hidden="true" className="w-12 h-12 mx-auto mb-3 text-gray-400 dark:text-gray-600" viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" fill="currentColor"/></svg>
            <blockquote>
                <p className="text-lg md:text-2xl italic font-medium text-gray-900 dark:text-white">
                    "{content}"
                </p>
            </blockquote>
            <figcaption className="flex items-center justify-center mt-6 space-x-3">
              <img className="w-6 h-6 rounded-full" src={profilePicture} alt="profile"/>
              <div className="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
                  <div className="pr-3 font-medium text-gray-900 dark:text-white">{fullName}</div>
                  <div className="pl-3 flex  text-sm gap-2 font-light text-gray-500 dark:text-gray-400">
                       <div className="flex items-center">
                            <ReactCountryFlag
                                countryCode={countryCode}
                                svg
                                aria-label={countryCode}
                                title={countryCode}
                            />
                        </div>
                        <div className="flex items-center">
                            {countryName}
                        </div>
                  </div>
              </div>
          </figcaption>
        </figure>
    </div>
  )
}

export default Testimonial