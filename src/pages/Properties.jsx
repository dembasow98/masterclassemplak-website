import React, { lazy, Suspense } from "react";

//Get the properties from the json file
import data from "./../data/properties/data.json";

import banner from "./../assets/images/banner/banner5.png";
import Spinner from "./../components/common/loader/Spinner.jsx";

const Property  = lazy(() => import("./../components/properties/forms/Property.jsx"));

//Get the Banner fromm common folder
const Filter = lazy(() => import("./../components/common/search/Filter.jsx"));
const Banner = lazy(() => import("./../components/common/banner/Banner.jsx"));

const properties = data.properties;


const Properties = () => {
    return (
        <main className="w-full flex flex-col items-center justify-center dark:bg-gray-900">
            <Suspense fallback={<Spinner/>}>
                <Banner title="PROPERTIES IN TÜRKİYE" image={banner} description="Find your dream home in Türkiye's wonderful cities" />
            </Suspense>
            <section className="px-8 py-4">
                <Suspense fallback={<Spinner/>}>
                    <Filter />
                </Suspense>
                <div className = "py-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
                    {
                        properties.map((property) => (
                            <Suspense fallback={<Spinner/>}>
                                <Property
                                    key = {property?.id}
                                    type = {property?.type}
                                    isFavorite = {property?.isFavorite}
                                    title = {property?.title}
                                    description = {property?.description}
                                    profileImage = {property?.source}
                                    gallery = {property?.gallery}
                                    location = {property?.location}
                                    price = {property?.price}
                                    reference = {property?.reference}
                                    createdAt = {property?.createdAt}
                                    updatedAt = {property?.updatedAt}
                                    overview = {property?.overview}
                                    benefits = {property?.benefits}
                                    details = {property?.details}
                                    features = {property?.features}
                                />
                            </Suspense>
                        ))
                
                    }
                </div>
            </section>
        </main>
    );
};

export default Properties;