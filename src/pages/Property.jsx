import React from 'react';
import { useParams, useLocation } from 'react-router-dom';

import { Head, Gallery, Details } from './../components/properties/property';
import Route from './../components/common/route/Route';

const Property = () => {
  const { slug } = useParams(); // access the "id" parameter from the URL
  
  const { state } = useLocation();
  console.log(state);

  //Get property details from the state
  const { title, price, reference, createdAt, updatedAt, gallery, description, overview, features, benefits, details } = state;

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
      <Gallery images={gallery} />
      <Details
        description={description}
        overview={overview}
        features={features}
        benefits={benefits}
        details={details}
      />
    </main>
  );
};

export default Property;
