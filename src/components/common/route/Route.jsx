import { Link } from 'react-router-dom';
import { Breadcrumbs } from "@material-tailwind/react";
import {AiFillHome} from 'react-icons/ai';
 
const Route = ({component, breadcrumbs }) =>{
  return (
    <div className="w-full flex dark:text-white flex-row border-b border-gray-700 dark:shadow-md shadow-gray-300 items-center justify-start">
      <Breadcrumbs>
        <Link to= "/" className="opacity-60 hover:hover:opacity-100 hover:text-red-600">
          <AiFillHome className="text-2xl md:text-3xl " />
        </Link>
        <Link to= "/properties" className="opacity-60 text-md md:text-xl hover:opacity-100 hover:text-red-600" >
          <span>{component}</span>
        </Link>
        <span className='opacity-60 hover:opacity-100 hover:text-red-600 text-md md:text-xl'>{breadcrumbs}</span>
      </Breadcrumbs>
    </div>
  );
}

export default Route;