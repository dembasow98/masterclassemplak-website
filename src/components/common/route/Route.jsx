import { Link } from 'react-router-dom';
import { Breadcrumbs } from "@material-tailwind/react";
import {AiFillHome} from 'react-icons/ai';
 
const Route = ({component, breadcrumbs }) =>{
  return (
    <div className="w-full  flex text-white flex-row border-b bg-gray-900 border-gray-700 shadow-md shadow-gray-300">
      <Breadcrumbs className='font-medium w-full md:px-14 lg:px-18 px-4 sm:px-10 xl:px-24 '>
        <Link to= "/" className="opacity-60 hover:hover:opacity-100 hover:text-red-600">
          <AiFillHome className="text-xl md:text-2xl " />
        </Link>
        <Link to={`/${component}`} className="opacity-60 text-md md:text-xl hover:opacity-100 hover:text-red-600" >
          <span>{component}</span>
        </Link>
        <span className='opacity-60 hover:opacity-100 hover:text-red-600 text-md md:text-xl'>{breadcrumbs}</span>
      </Breadcrumbs>
    </div>
  );
}

export default Route;