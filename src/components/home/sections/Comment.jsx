import React from 'react'
import yel1 from '../../../assets/images/separators/yellow/yel2.png'

const Comment = () => {
  return (
    <section className="py-8">
        <div className="container  mx-auto ">
            <div className="w-full flex flex-col md:px-2 lg:px-10">
                <div className="flex flex-col mb-5">
                    <h2 className="text-4xl font-bold text-center text-gray-800 dark:text-white mb-5">
                        Master Class Emlak
                    </h2>
                    <p className="text-2xl font-bold italic text-gray-600 dark:text-gray-400 text-center">
                        The destination of your dream property
                    </p>
                    
                    <div className="flex py-2 justify-center">
                        <img src={yel1} alt="yel1" />
                    </div>
                </div>
                
                <div className="w-full flex ">
                    <div className="w-full flex flex-col justify-center items-center rounded shadow py-4">
                        <p className="text-gray-800 text-center dark:text-gray-100 text-base px-4 md:text-xl">
                        Masterclass Property is a top-notch real estate company that sets the bar high in the industry. 
                        Their commitment to excellence is evident in every aspect of their operations. <br />
                        <br/> 
                        Masterclass Property's extensive network and market insights enable them to find exceptional properties that perfectly 
                        align with their clients' preferences and investment goals. 
                        Their commitment to delivering exceptional results is evident in the successful transactions they have facilitated.
                        <br />
                        Choosing Masterclass Property for your real estate needs is a decision you won't regret. 
                        They have proven time and again to be a reliable and results-oriented company that exceeds expectations. 
                        Trust them to make your real estate dreams a reality.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Comment