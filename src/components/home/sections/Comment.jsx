import React from 'react'

const Comment = () => {
  return (
    <section className="bg-gray-100 dark:bg-gray-900">
        <div className="container  mx-auto px-6 py-20">
            <div className="w-full flex flex-col mb-10 md:px-2 lg:px-10">
                <div className="flex flex-col mb-5">
                    <h2 className="text-4xl font-bold text-center text-gray-800 dark:text-white mb-5">
                        Master Class Emlak
                    </h2>
                    <p className="text-2xl font-bold italic text-gray-600 dark:text-gray-400 text-center">
                        "The destination of your dream property"
                    </p>
                </div>
                
                <div className="w-full flex ">
                    <div className="bg-white dark:bg-gray-800 rounded shadow py-2">
                        <p className="text-gray-800 dark:text-gray-100 text-base px-6 mb-5">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                        when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                        It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
                        It was popularised in the 1960s with the release of Letraset sheets containing 
                        Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.  
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Comment