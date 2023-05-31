import React, {useState, useEffect, Suspense, lazy} from 'react';
import {useLocation } from 'react-router-dom';
import  Spinner  from './../components/common/loader/Spinner.jsx';

const Comment = lazy(() => import("./../components/blog/form/Comment.jsx"));
const Related = lazy(() => import("./../components/blog/similar/Related.jsx"));

const Head = lazy(() => import("./../components/blog/view/Head.jsx"));
const Route = lazy(() => import("./../components/common/route/Route.jsx"));
const Gallery = lazy(() => import("./../components/common/gallery/Gallery.jsx"));

const Blog = () => {

  const { state } = useLocation();
  //console.log(state);

  //Get Blog details from the state
  const {
    //id,
    title,
    banner,
    createdAt,
    updatedAt,
    //author,
    //avatar,
    content1,
    content2,
    content3,
    content4,
    content5,
    content6,
    content7,
    content8,
    content9,
    content10,
    content11,
    gallery,
    tags } = state;

  //console.log("From details:"+features);

  //The titleCase is a span tag:
  const titleCase = <span className="text-2xl font-bold text-gray-900 dark:text-gray-100">Please Share Your Thought With Us</span>;
  
  //This happens starting from the middle breakpoint
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 768) {
      setScroll(true);
    }
  }, [scroll]);

  //TODO: Extract the image link from the google drive link shared link:
  const extractImageGoogleDriveLink = (link) => {
    const startIndex = link.indexOf("/d/") + 3; // Find the starting index of the ID
    const endIndex = link.indexOf("/view"); // Find the ending index of the ID
    const imageId = link.substring(startIndex, endIndex);
    // Form the embed link of the image
    const imageLink = `https://drive.google.com/uc?export=view&id=${imageId}`;
    return imageLink;
  };
  return (
    <main className="bg-black">
      <Suspense fallback={<Spinner />}>
        <Route component="Blogs" breadcrumbs={title} />
      </Suspense>
      <Suspense fallback={<Spinner />}>
        <Head
          title={title}
          tags={tags}
          createdAt={createdAt}
          updatedAt={updatedAt}
        />
      </Suspense>
        <section className="w-full mt-4 md:px-10 flex flex-col md:flex-row md:items-start md:justify-start items-center justify-center">
          <div className="w-full flex md:w-2/3 flex-col md:px-4 lg:px-6">
            <div className='flex flex-col w-full border border-[#043334] mb-6 pb-4 rounded-xl md:items-start md:justify-start items-center justify-center'>
                <div className="w-fit flex flex-col items-center justify-center">
                    <img src={extractImageGoogleDriveLink(banner)} alt={title} className="object-cover object-center" />
                </div>
                
                <div className="w-full flex p-4 flex-col items-center justify-center">
                  <p className="text-xl md:text-2xl font-md md:font-bold text-gray-200">{content1?.title}</p>
                  <p className="text-md md:text-xl  text-gray-200">{content1?.content}</p>
                </div>

                <div className="w-full flex p-4 flex-col items-center justify-center">
                  <p className="text-xl md:text-2xl font-md md:font-bold text-gray-200">{content2?.title}</p>
                  <p className="text-md md:text-xl text-gray-200">{content2?.content}</p>
                </div>
                <div className="w-full flex p-4 flex-col items-center justify-center">
                  <p className="text-xl md:text-2xl font-md md:font-bold text-gray-200">{content3?.title}</p>
                  <p className="text-md md:text-xl  text-gray-200">{content3?.content}</p>
                </div>

                <div className="w-full p-4 flex flex-col items-center justify-center">
                  <Suspense fallback={<Spinner />}>
                    <Gallery images={gallery} />
                  </Suspense>
                </div>

                <div className="w-full flex p-4 flex-col items-center justify-center">
                  <p className="text-xl md:text-2xl font-md md:font-bold text-gray-200">{content4?.title}</p>
                  <p className="text-md md:text-xl  text-gray-200">{content4?.content}</p>
                </div>
                <div className="w-full flex p-4 flex-col items-center justify-center">
                  <p className="text-xl md:text-2xl font-md md:font-bold text-gray-200">{content5?.title}</p>
                  <p className="text-md md:text-xl  text-gray-200">{content5?.content}</p>
                </div>
                <div className="w-full flex p-4 flex-col items-center justify-center">
                  <p className="text-xl md:text-2xl font-md md:font-bold text-gray-200">{content6?.title}</p>
                  <p className="text-md md:text-xl  text-gray-200">{content6?.content}</p>
                </div>

                <div className="w-full flex p-4 flex-col items-center justify-center">
                  <p className="text-xl md:text-2xl font-md md:font-bold text-gray-200">{content7?.title}</p>
                  <p className="text-md md:text-xl  text-gray-200">{content7?.content}</p>
                </div>

                <div className="w-full flex p-4 flex-col items-center justify-center">
                  <p className="text-xl md:text-2xl font-md md:font-bold text-gray-200">{content8?.title}</p>
                  <p className="text-md md:text-xl  text-gray-200">{content8?.content}</p>
                </div>

                <div className="w-full flex p-4 flex-col items-center justify-center">
                  <p className="text-xl md:text-2xl font-md md:font-bold text-gray-200">{content9?.title}</p>
                  <p className="text-md md:text-xl  text-gray-200">{content9?.content}</p>
                </div>

                <div className="w-full flex p-4 flex-col items-center justify-center">
                  <p className="text-xl md:text-2xl font-md md:font-bold text-gray-200">{content10?.title}</p>
                  <p className="text-md md:text-xl  text-gray-200">{content10?.content}</p>
                </div>

                <div className="w-full flex p-4 flex-col items-center justify-center">
                  <p className="text-xl md:text-2xl font-md md:font-bold text-gray-200">{content11?.title}</p>
                  <p className="text-md md:text-xl  text-gray-200">{content11?.content}</p>
                </div>
            </div>
            <div className="w-full flex flex-col items-center md:mt-4 px-3 justify-center">
              <Suspense fallback={<Spinner />}>
                <Comment title={titleCase} />
              </Suspense>
            </div>

          </div>
          <div className="w-full md:w-1/3 px-4 md:px-1 lg:px-2 xl:px-6 2xl:px-10 pb-6 items-center pjustify-center">
            <Suspense fallback={<Spinner />}>
              <Related />
            </Suspense>
          </div>

        </section>

    </main>
  );
};

export default Blog;