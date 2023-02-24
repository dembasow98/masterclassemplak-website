import React from 'react';
import {Head, Gallery, Details} from './components';
import Route from './../components/common/route/Route';

const Property = ({title, price, reference, additionDate,  gallery, description, overview, features, benefits, details}) => {
    
    return (
        <main className="bg-gray-100 mx-auto px-8 py-8 dark:bg-gray-900">
            <Route component= "Properties" breadcombs={title} />
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