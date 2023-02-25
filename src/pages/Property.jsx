import React from 'react';
import { useParams, useLocation } from 'react-router-dom';

import { Head, Gallery, Details } from './../components/properties/property';
import Route from './../components/common/route/Route';

const Property = () => {
  const { slug } = useParams(); // access the "id" parameter from the URL
  
  const { state } = useLocation();
  console.log(state);
  //Get property details from the state

  const { title, price, reference, additionDate, gallery, description, overview, features, benefits, details } = state;

  /*const galleryImages = [
    {
      original: 'https://picsum.photos/id/1018/1000/600/',
      thumbnail: 'https://picsum.photos/id/1018/250/150/',
    },
    {
      original: 'https://picsum.photos/id/1015/1000/600/',
      thumbnail: 'https://picsum.photos/id/1015/250/150/',
    },
    {
      original: 'https://picsum.photos/id/1019/1000/600/',
      thumbnail: 'https://picsum.photos/id/1019/250/150/',
    },
  ];*/

  return (
    <main className="bg-gray-100 mx-auto px-8 py-8 dark:bg-gray-900">
      <Route component="Properties" breadcrumbs={title} />
      <Head
        title={title}
        price={price}
        reference={reference}
        additionDate={additionDate}
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
