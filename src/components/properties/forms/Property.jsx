import React, {useState} from 'react';
import {AiTwotoneHeart} from "react-icons/ai";
import {Link} from "react-router-dom";

const Property = (
    {
        type, 
        isFavorite, 
        title, 
        description, 
        profileImage, 
        location, 
        toilets, 
        bedrooms, 
        bathrooms,
        area, 
        hasPool,
        hasGarden,
        hasParking,
    }) => {

        const [isLiked, setIsLiked] = useState(false);

        const handleLikeClick = () => {
            setIsLiked(!isLiked);
        };

        //image click handler
        const slugify = (string) => {
            return string
                .toString()
                .toLowerCase()
                .replace(/\s+/g, "-") // Replace spaces with -
                .replace(/[^\w\-]+/g, "") // Remove all non-word chars
                .replace(/\-\-+/g, "-") // Replace multiple - with single -
                .replace(/^-+/, "") // Trim - from start of text
                .replace(/-+$/, ""); // Trim - from end of text
        };

  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <div className="relative">
        <div className="absolute top-0 left-0 bg-blue-700 dark:bg-[#059669] text-white rounded-bl-lg py-1 px-2">{type}</div>
            <button className="absolute top-0 right-0 m-1 p-2 rounded-full  hover:bg-gray-800 dark:bg-gray-700 border-gray-500">
                <AiTwotoneHeart 
                    {...isFavorite}
                    className={`w-5 h-5 fill-current ${isLiked ? "text-red-600" : "text-gray-400"}`}
                    onClick={handleLikeClick}
                /> 
            </button>
           
            <Link to= {`/properties/${slugify(title)}`}>
                <img className="rounded-t-lg" src={profileImage} alt={title} />
            </Link>
        </div>
        <div className="p-5">
            <a href="#">
            <h5 className="mb-2 text-2xl dark:text-slate-100 font-bold">{title}</h5>
            </a>
            <p className="mb-2 text-gray-600">{description}</p>
            <div className="flex items-center mb-2">
                <svg className="w-5 h-5 fill-current text-gray-400" viewBox="0 0 24 24">
                    <path d="M11 3.05v2.94a8.001 8.001 0 016 7.74V19h-2v-5.27a6 6 0 10-4 0V19H5v-5.27a8.001 8.001 0 016-7.74zM12 13a3 3 0 100-6 3 3 0 000 6z" />
                </svg>
                <span className="ml-2 text-gray-600">{location}</span>
            </div>
            <div className="flex items-center">
                <svg className="w-5 h-5 fill-current text-gray-400" viewBox="0 0 24 24">
                    <path d="M18 9v7H6V9H4v9a1 1 0 001 1h14a1 1 0 001-1V9h-2zm-4-7a1 1 0 011 1v1h-2V3a1 1 0 011-1z" />
                </svg>
                <span className="ml-2 text-gray-600">{toilets} toilets</span>
                <span className="mx-2 text-gray-400">-</span>
                <svg className="w-5 h-5 fill-current text-gray-400" viewBox="0 0 24 24">
                    <path d="M18 4v7a3 3 0 01-3 3H9a3 3 0 01-3-3V4h2v7a1 1 0 001 1h4a1 1 0 001-1V4h2zm-8 0v7h4V4h-4z" />
                </svg>
                <span className="ml-2 text-gray-600">{bedrooms} bedrooms</span>
            </div>
        </div>
    </div>
    );
};

export default Property;
