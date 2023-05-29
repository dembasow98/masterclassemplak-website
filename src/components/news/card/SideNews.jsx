import React from 'react'
import Card from './Card'

import separator from './../../../assets/images/separators/yellow/yel2.png'

import data from './../../../data/news/data.json'

const news = data.news


const SideNews = () => {
  return (
    <div class="flex flex-col justify-start bg-news-paper pb-4 px-10 my-4 rounded-md">
        <div className='py-5'>
            <p className="text-3xl lg:text-4xl font-bold text-center text-gray-200">
                Latest News
            </p>
            <img src = {separator} alt = "separator" className = "w-full mx-auto py-2"/>
        </div>
        <div class="flex flex-col justify-center gap-y-4 items-center">
            {
                news.map((item, index) => {
                    return (
                        <Card 
                            key={index} 
                            banner={item.banner}
                            title={item.title}
                            description={item.description}
                            date={item.date}
                        />
                    )
                })
            }
        </div>
    </div>
  )
}

export default SideNews