import React, { Suspense, lazy } from "react";
import Spinner from "../components/common/loader/Spinner.jsx";

import data from "../data/news/data.json"

import banner  from "../assets/images/banner/news-banner.jpg"

const news = data.news

const Banner = lazy(()=>import("../components/common/banner/Banner.jsx"))
const NewCard = lazy(()=>import("../components/news/card/NewCard.jsx"))
const Related = lazy(()=>import("../components/news/related/Related.jsx"))
const Search = lazy(()=>import("../components/news/search/Search.jsx"))
const SideNews = lazy(()=>import("../components/news/card/SideNews.jsx"))




const News = () => {

    return (
      <main className="bg-black">
          <Suspense fallback={<Spinner />}>
            <Banner 
              title = "PROPERTY INVESTMENT NEWS IN TURKIYE" 
              image={banner} 
              description="Read news on property investment in Türkiye."
            />
          </Suspense>
          <Suspense fallback={<Spinner />}>
            <Search />
          </Suspense>
          
          <div className='flex flex-col md:flex-row mx-auto md:justify-start md:items-start  px-4 py-2 items-center justify-center w-full h-full'>
      
            <section className="flex flex-col md:w-2/3 w-full md:min-h-screen my-8 md:py-0 md:my-0 mx-auto max-w-screen-xl  lg:px-6">
              <div className="grid gap-6 w-full">
              
                {
                  news.map((item, index)=>(
                    <Suspense fallback={<Spinner />}>
                        <NewCard
                            key={index}
                            id={item.id}
                            title={item.title}
                            banner={item.banner}
                            createdAt={item.createdAt}
                            updatedAt={item.updatedAt}
                            author={item.author}
                            avatar={item.avatar}
                            content1={item.content1}
                            content2={item.content2}
                            content3={item.content3}
                            content4={item.content4}
                            content5={item.content5}
                            content6={item.content6}
                            content7={item.content7}
                            content8={item.content8}
                            content9={item.content9}
                            content10={item.content10}
                            content11={item.content11}
                            gallery={item.gallery}
                            tags={item.tags}
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


export default News;