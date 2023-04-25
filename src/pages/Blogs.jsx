import React from "react";

import {Banner, Card, Detail, Related} from '../components/blog/'

const Blogs = () => {

    return (
      <>
        <Banner />
        <div className='flex flex-col bg-yellow-200 items-center justify-center w-full h-full'>
          <section class="LEFT bg-white dark:bg-gray-900">
            <Card />
          </section>
          <section class="RIGHT bg-white dark:bg-gray-900">
           
          </section>
        </div>
      </>
    );
};


export default Blogs;