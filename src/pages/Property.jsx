import React, {useState, useEffect, lazy, Suspense} from 'react';
import {useLocation } from 'react-router-dom';

import Spinner from '../components/common/loader/Spinner.jsx';

const Head = lazy(() => import('./../components/properties/property/Head.jsx'));
const Details = lazy(() => import('./../components/properties/property/Details.jsx'));

const Route = lazy(() => import('./../components/common/route/Route.jsx'));
const Enquire = lazy(() => import('./../components/common/forms/Enquire.jsx'));
const Gallery = lazy(() => import('./../components/common/gallery/Gallery.jsx'));



const Property = () => {
  
  const { state } = useLocation();
  //console.log(state);

  //Get property details from the state
  const { title, price, reference, createdAt, updatedAt, gallery, description, overview, features, benefits, details } = state;
  //console.log("From details:"+features);

  //The titleCase is a span tag:
  const titleCase = <span className="text-2xl font-bold text-gray-900 dark:text-gray-100">"Enquire About <br  /> This Property"</span>;

  //This happens starting from the middle breakpoint
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 768) {
      setScroll(true);
    }
  }, [scroll]);

  return (
    <main className="bg-gray-100 mx-auto px-auto dark:bg-gray-900">
      <Suspense fallback={<Spinner/>}>
        <Route component="Properties" breadcrumbs={title} />
      </Suspense>
      <Suspense fallback={<Spinner/>}>
        <Head
          title={title}
          description={description}
          price={price}
          reference={reference}
          createdAt={createdAt}
          updatedAt={updatedAt}
        />
      </Suspense>
      <section className="w-full md:px-14 lg:px-18 px-4 sm:px-10 xl:px-24 flex flex-col md:flex-row md:items-start md:justify-start items-center justify-center">
        <div className="w-full flex flex-col items-center md:w-2/3 justify-center">
          <Suspense fallback={<Spinner/>}>
            <Gallery images={gallery} />
          </Suspense>
          <Suspense fallback={<Spinner/>}>
            <Details
              overview={overview}
              //convert features to an array using json.parse
              features={JSON.parse(features)}
              benefits={benefits}
              details={details}
            />
          </Suspense>
        </div>
        <div 
          className="w-full flex flex-col items-center md:mt-4 md:w-1/3 justify-center"
          style={{ position: scroll ? "sticky" : "relative", top: scroll ? "6rem" : "0" }}
        >
          <Suspense fallback={<Spinner/>}>
            <Enquire title={titleCase} isModal={false} />
          </Suspense>

        </div>
      </section>
    </main>
  );
};

export default Property;