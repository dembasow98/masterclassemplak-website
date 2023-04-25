import React from "react";

import {Banner, Card, Detail, Related, Search} from '../components/blog/'

const Blogs = () => {

    return (
      <main className="bg-gray-100 dark:bg-gray-900">
        <Banner />
        <section className="px-2 lg:px-8 lg:py-8">
          <Search />
          <div className='flex flex-col mx-auto px-8 py-8 bg-yellow-200 items-center justify-center w-full h-full'>
            <section class="LEFT bg-white dark:bg-gray-900">
              
              <Card />
            </section>
            <section class="RIGHT bg-white dark:bg-gray-900">
            
            </section>
          </div>
        </section>
      </main>
    );
};


export default Blogs;