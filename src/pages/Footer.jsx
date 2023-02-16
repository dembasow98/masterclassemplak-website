import React from 'react'

const Footer = () => {
  return (
    <div>
        <div className='flex w-full h-24 bottom-0 float-bottom bg-white text-black dark:text-white dark:bg-gray-700'>
            <div className='flex items-center justify-between w-full px-4 mx-auto'>
                <div className='flex items-center'>
                    <div className='flex items-center justify-center w-10 h-10 mr-2 text-white rounded-full'>
                        <svg
                            className='w-6 h-6' 
                            fill='none'
                            stroke='currentColor'
                            viewBox='0 0 24 24'
                            xmlns='http://www.w3.org/2000/svg'
                        >
                            <path

                                strokeLinecap='round'   
                                strokeLinejoin='round'
                                strokeWidth={2}
                                d='M12 6v6m0 0v6m0-6h6m-6 0H6'
                            />
                        </svg>
                    </div>
                    <span className='font-semibold'>Logo</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer