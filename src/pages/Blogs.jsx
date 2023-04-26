import React from "react";

import {Banner} from '../components/common/'

import {Card, Detail, Related, Search} from '../components/blog/'
import {NewsCard} from '../components/news/'

import banner from '../assets/images/banner/banner3.png'

const Blogs = () => {

    return (
      <main className="bg-gray-100 dark:bg-gray-900">
        <Banner 
            title = "MASTER CLASS PROPERTY BLOG" 
            image={banner} 
            description="Read some super important articles on property investment here in Türkiye."
          />
          
          <Search />
          <div className='flex flex-col md:flex-row mx-auto md:justify-start md:items-start  px-8 py-8 items-center justify-center w-full h-full'>
            <div className='flex flex-col md:w-2/3 w-full'>
              <Card />
            </div>
            <div className='flex flex-col md:w-1/3 w-full'>
              <Related />
              <NewsCard />
            </div>

          </div>
      </main>
    );
};


export default Blogs;