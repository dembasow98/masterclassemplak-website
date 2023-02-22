import React from "react";
import Property from "./../components/properties/forms/Property";

//Get the route for the given route name
import {Route} from "./../components/common";
//Get the properties from the json file
import data from "./../data/slides/data.json";
import {MdOutlineApartment} from "react-icons/md";

const properties = data.properties;

//Title will be the route name

const Properties = () => {
    return (
        <main className="w-full flex flex-col items-center justify-center">
            <Route icon = {<MdOutlineApartment/>} title= "properties" />
            <div className = " bg-yellow-300 px-8 py-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
                {
                    
                    properties.map((property) => (
                        <Property 
                            type = {property.type} 
                            title={property.title} 
                            price={property.price} 
                            reference={property.reference} 
                            additionDate={property.additionDate} 
                            gallery={property.gallery} 
                            description={property.description} 
                            overview={property.overview} 
                            features={property.features} 
                            benefits={property.benefits} 
                            details={property.details} 
                        />
                    ))
               
                }
            </div>
        </main>
    );
};

export default Properties;