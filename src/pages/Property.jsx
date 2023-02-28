import React, {useState, useEffect} from 'react';
import {useLocation } from 'react-router-dom';

import { Head, Gallery, Details } from './../components/properties/property';
import {Route, Enquire} from './../components/common';


const Property = () => {
  //const { slug } = useParams(); // access the "id" parameter from the URL
  
  const { state } = useLocation();
  console.log(state);

  //Get property details from the state
  const { title, price, reference, createdAt, updatedAt, gallery, description, overview, features, benefits, details } = state;
  //console.log("From details:"+features);

  //this is to PREVENT the Enquire component from scrolling to the top of the page

  //This happens starting from the middle breakpoint
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 768) {
      setScroll(true);
    }
  }, [scroll]);

  return (
    <main className="bg-gray-100 mx-auto px-auto dark:bg-gray-900">
      <Route component="Properties" breadcrumbs={title} />
      <Head
        title={title}
        description={description}
        price={price}
        reference={reference}
        createdAt={createdAt}
        updatedAt={updatedAt}
      />
      <section className="w-full md:px-14 lg:px-18 px-4 sm:px-10 xl:px-24 flex flex-col md:flex-row md:items-start md:justify-start items-center justify-center">
        <div className="w-full flex flex-col items-center md:w-2/3 justify-center">
          <Gallery images={gallery} />
          <Details
            overview={overview}
            //convert features to an array using json.parse
            features={JSON.parse(features)}
            benefits={benefits}
            details={details}
          />
        </div>
        <div 
          className="w-full flex flex-col items-center md:mt-4 md:w-1/3 justify-center"
          style={{ position: scroll ? "sticky" : "relative", top: scroll ? "6rem" : "0" }}
        >
          <Enquire />
        </div>
      </section>
    </main>
  );
};

export default Property;
