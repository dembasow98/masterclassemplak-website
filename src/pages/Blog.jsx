import React, {useState, useEffect} from 'react';
import {useLocation } from 'react-router-dom';

import { Head } from './../components/blog/view';
import {Route, Enquire, Gallery} from './../components/common';


const Blog = () => {
  //const { slug } = useParams(); // access the "id" parameter from the URL
  
  const { state } = useLocation();
  //console.log(state);

  //Get Blog details from the state
  const {
    id,
    title,
    description,
    banner,
    createdAt,
    updatedAt,
    author,
    avatar,
    content1,
    content2,
    gallery,
    tags } = state;

  //console.log("From details:"+features);

  //The titleCase is a span tag:
  const titleCase = <span className="text-2xl font-bold text-gray-900 dark:text-gray-100">"Enquire About <br  /> This Blog"</span>;
  //This happens starting from the middle breakpoint
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 768) {
      setScroll(true);
    }
  }, [scroll]);

  return (
    <main className="bg-gray-100 mx-auto px-auto dark:bg-gray-900">
      <Route component="Blogs" breadcrumbs={title} />
      <Head
            title={title}
            tags={tags}
            createdAt={createdAt}
            updatedAt={updatedAt}
       />

        <div className="w-full flex flex-col md:flex-row md:items-start md:justify-start items-center justify-center">
            <div className='mx-6'>
                <div className="w-full flex flex-col items-center md:w-2/3 justify-center">
                    <img src={banner} alt={title} className="w-full h-96 object-cover object-center" />
                </div>

                {/*Add the description here */}
                <div className="w-full flex flex-col items-center md:w-2/3 justify-center">
                    <p className="text-md md:text-xl font-bold text-gray-900 dark:text-gray-100">{description}</p>
                </div>
                {/*Add the content1  here */}
                <div className="w-full flex flex-col items-center md:w-2/3 justify-center">
                    <p className="text-sm md:text-md font-bold text-gray-900 dark:text-gray-100">{content1}</p>
                </div>
                <div className="w-full flex flex-col items-center md:w-2/3 justify-center">
                    <Gallery images={gallery} />
                </div>
                {/*Add the content2  here */}
                <div className="w-full flex flex-col items-center md:w-2/3 justify-center">
                    <p className="text-sm md:text-md font-bold text-gray-900 dark:text-gray-100">{content2}</p>
                </div>
                <div 
                    className="w-full flex flex-col items-center md:mt-4 md:w-1/3 justify-center"
                    style={{ position: scroll ? "sticky" : "relative", top: scroll ? "6rem" : "0" }}
                    >
                    <Enquire title={titleCase} isModal={false} />
                </div>
            </div>
        </div>
    </main>
  );
};

export default Blog;