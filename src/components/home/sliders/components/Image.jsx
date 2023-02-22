import React, {useState} from 'react';
//import { Link } from 'react-router-dom';

//import Inquire from '../../forms/Inquire';


const Image = ({ title, source, description, tags }) => {
  // Function to convert the title to a slug
  const slugify = (string) => {
    return string
      .toString()
      .toLowerCase()
      .replace(/\s+/g, '-') // Replace spaces with -
      .replace(/[^\w-]+/g, '') // Remove all non-word chars
      .replace(/--+/g, '-') // Replace multiple - with single -
      .replace(/^-+/, '') // Trim - from start of text
      .replace(/-+$/, ''); // Trim - from end of text
  };

  //Each clicked image will redirect to the page of the image
  const handleClick = () => {
    window.location.href = `/properties/${slugify(title)}`;
    //<Link to={`/properties/${slugify(title)}`} />;
  };
  //After clicking the inquire button it will show a popup which is the inquire form
  const [showInquireForm, setShowInquireForm] = useState(false);

  const handleShowInquireForm = () => {
    setShowInquireForm(true);
  };
  const handleCloseInquireForm = () => {
    setShowInquireForm(false);
  };

  return (
    <div className="relative mx-auto">
      <img src={source} alt={title} onClick={handleClick} className="w-full cursor-pointer h-[530px] md:h-[500px] lg:h-[540px] object-cover" />
      <div className="flex left-0 items-center justify-center  right-0 px-4 w-full ">
        <div className="absolute top-10 w-fit max-w-full  mx-5 px-10  md:mx-10 md:px-20 flex items-center flex-col py-3 bg-gray-900 bg-opacity-25">
            <div className="text-xl font-bold text-white">{title}</div>
            <div className="text-gray-300 dark:text-gray-100">{description}</div>
            <div className="mt-2">
                {tags.map((tag) => (
                    <span
                    key={tag}
                    className="inline-block px-2 py-1 mr-2 text-sm font-semibold text-gray-700 bg-gray-300 rounded-full"
                    >
                    #{tag}
                    </span>
                ))}
            </div>
        </div>
        <div className="absolute bottom-14 inline-flex items-center justify-center p-0.5 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br  from-red-900 to-pink-700 bg-red-900 group-hover:from-pink-700 group-hover:to-red-900 hover:text-white dark:text-white focus:outline-none">
          <button
            //Here after clicking the button it will show a popup which is the inquire form
            className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0"
          >
            INQUIRE NOW!
          </button>
        </div>
      </div>
    </div>
  );
};

export default Image;
