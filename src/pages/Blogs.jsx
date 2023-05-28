import React, { Suspense, lazy } from "react";
import Spinner from "../components/common/loader/Spinner.jsx";

import data from "../data/blogs/data.json"

import banner  from "../assets/images/banner/banner3.png"

const blogs = data.blogs

const Banner = lazy(()=>import("../components/common/banner/Banner.jsx"))
const BlogCard = lazy(()=>import("../components/blog/form/BlogCard.jsx"))
const Related = lazy(()=>import("../components/blog/similar/Related.jsx"))
const Search = lazy(()=>import("../components/blog/find/Search.jsx"))
const SideNews = lazy(()=>import("../components/news/card/SideNews.jsx"))




const Blogs = () => {

    return (
      <main className="bg-black">
          <Suspense fallback={<Spinner />}>
            <Banner 
              title = "MASTER CLASS PROPERTY BLOG" 
              image={banner} 
              description="Read some super important articles on property investment here in Türkiye."
            />
          </Suspense>
          <Suspense fallback={<Spinner />}>
            <Search />
          </Suspense>
          
          <div className='flex flex-col md:flex-row mx-auto md:justify-start md:items-start  px-4 py-2 items-center justify-center w-full h-full'>
      
            <section className="flex flex-col md:w-2/3 w-full md:min-h-screen my-8 md:py-0 md:my-0 mx-auto max-w-screen-xl  lg:px-6">
              <div className="grid gap-6 w-full">
              
                {
                  blogs.map((blog) => (
                    <Suspense fallback={<Spinner />}>
                      <BlogCard 
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
                    </Suspense>
                  ))  
                }
         
              </div>
            </section>

            <section className='flex flex-col md:w-1/3 w-full'>
              <Suspense fallback={<Spinner />}>
                <Related />
              </Suspense>
              <Suspense fallback={<Spinner />}>
                <SideNews />
              </Suspense>
            </section>

          </div>
      </main>
    );
};


export default Blogs;