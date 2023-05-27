import React, {useState} from 'react';
import {AiTwotoneHeart} from "react-icons/ai";
import {Link} from "react-router-dom";
import {IoBedOutline} from "react-icons/io5";
import {BiBath} from "react-icons/bi";
import {FaToilet} from "react-icons/fa";
import {GiModernCity} from "react-icons/gi";
import {MdOutlinePool} from "react-icons/md";
import {BsTextarea} from "react-icons/bs";
import {RiParkingBoxLine} from "react-icons/ri";
import {MdRealEstateAgent} from "react-icons/md";
import {SiProtodotio} from "react-icons/si";
import {MdPriceChange} from "react-icons/md";

const Property = ({type, isFavorite, title,description,profileImage, gallery,location, price, reference,createdAt,updatedAt,overview, benefits,details, features,}) => {
        
    //Get all the property details and store them in a variable
    const property = {
        type,
        isFavorite,
        title,
        description,
        profileImage,
        gallery,
        location,
        price,
        reference,
        createdAt,
        updatedAt,
        overview,
        benefits,
        details,
        //convert features to an array using json.stringify
        features: JSON.stringify(features)
    };

    const [isLiked, setIsLiked] = useState(false);

    const handleLikeClick = () => {
        setIsLiked(!isLiked);
    };

    // Function to convert the title to a slug
    const slugify = (string) => {
        return string
            .toString()
            .toLowerCase()
            .replace(/\s+/g, '-') // Replace spaces with -
            .replace(/[^\w-]+/g, '') // Remove all non-word chars except -
            .replace(/--+/g, '-') // Replace multiple - with single -
            .replace(/^-+/, '') // Trim - from start of text
            .replace(/-+$/, ''); // Trim - from end of text
    };

    return (
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <div className="relative">
                <div className="absolute top-0 left-0 bg-blue-700 dark:bg-[#059669] text-white rounded-bl-lg py-1 px-2">{type}</div>
                    <button className="absolute top-0 right-0 m-1 p-2 rounded-full  hover:bg-gray-800 dark:bg-gray-700 border-gray-500">
                        <AiTwotoneHeart 
                            className={`w-5 h-5 fill-current ${isLiked ? "text-red-600" : "text-gray-400"}`}
                            onClick={handleLikeClick}
                        /> 
                    </button>
                   
                    <Link 
                        to= {`/properties/${slugify(title)}`}  
                        state = {property}
                    >
                        <img className="rounded-t-lg" src={profileImage} alt={title} />
                    </Link>
                </div>
                <div className="p-5">
                    <Link
                        to= {`/properties/${slugify(title)}`}  
                        state = {property}
                    >
                        <h5 className="mb-2 text-2xl dark:text-gray-300 font-bold">{title}</h5>
                    </Link>
                    <p className="mb-2 text-gray-600 dark:text-slate-400">{description}</p>
                    <div className="flex justify-center items-center mb-2 dark:text-gray-500">
                        <div className='ml-2 flex items-center  justify-center '>
                            <div className = "flex items-center  justify-center w-8 h-8 mr-2 text-white bg-blue-700 dark:bg-green-500 rounded-full">
                            <MdPriceChange />
                            </div>
                            <span className="text-gray-400">Price: </span>
                            <span className=' dark:text-green-600'>{price}</span>
                        </div>
                    </div>
                    <div className="grid justify-center  grid-cols-2 gap-2 items-center">
                        {features.map((feature, index) => (
                            <div key={index} className="flex items-center mr-4">
                                <div className="flex items-center justify-center mx-2 text-green-800">
                                    {feature.name === "Bedrooms" && <IoBedOutline />}
                                    {feature.name === "Bathrooms" && <BiBath />}
                                    {feature.name === "Toilets" && <FaToilet />}
                                    {feature.name === "Parking" && <RiParkingBoxLine />}
                                    {feature.name === "Pool" && <MdOutlinePool />}
                                    {feature.name === "City" && <GiModernCity />}
                                    {feature.name === "Garden" && <BsTextarea/>}
                                    {feature.name === "Area" && <MdRealEstateAgent />}
                                    {feature.name === "Other" && <SiProtodotio />}
                                </div>
                                <span className="text-gray-500">{feature.name}: </span>
                                <span className="text-gray-500">{feature.value}</span>
                            </div>
                        ))}
                    </div>
                </div>
        </div>
    );
};

export default Property;
