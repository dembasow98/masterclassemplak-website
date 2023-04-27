import React from "react";

import {Banner} from '../components/common/'

import {Card, Related, Search} from '../components/blog/'
import {NewsCard} from '../components/news/'

import banner from '../assets/images/banner/banner3.png'

import data from '../data/blogs/data.json'
const blogs = data.blogs

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
    
            <section className="flex flex-col md:w-2/3 w-full md:min-h-screen my-8 px-4 md:py-0 md:my-0 mx-auto max-w-screen-xl  lg:px-6">
              <div className="grid gap-6 w-full">
                {
                  blogs.map((blog) => (
                    <Card 
                      key = {blog?.id}
                      title = {blog?.title}
                      description = {blog?.description}
                      banner = {blog?.banner}
                      createdAt = {blog?.createdAt}
                      updatedAt = {blog?.updatedAt}
                      author = {blog?.author}
                      avatar={blog?.avatar}
                      content1={blog?.content1}
                      content2={blog?.content2}
                      gallery={blog?.gallery}
                      tags = {blog?.tags}
                    />
                  ))  
                }
                
              </div>
            </section>
          
            <section className='flex flex-col md:w-1/3 w-full'>
              <Related />
              <NewsCard />
            </section>

          </div>
      </main>
    );
};


export default Blogs;