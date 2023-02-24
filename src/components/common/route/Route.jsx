import { Link } from 'react-router-dom';
import { Breadcrumbs } from "@material-tailwind/react";
 
const Route = ({component, breadcombs }) =>{
  return (
    <div className="w-full h-16 min-h-10 flex dark:text-white flex-row border-b border-gray-700 dark:shadow-md shadow-gray-300 items-center justify-start">
      <Breadcrumbs>
        <Link to ='/' className="opacity-60 ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 lg:w-8 lg:h-8 focus:text-gray-50 hover:text-gray-50"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
          </svg>
        </Link>
        <Link to="/" className="opacity-60">
          <span>{component}</span>
        </Link>
        <Link to="/">{breadcombs}</Link>
      </Breadcrumbs>
    </div>
  );
}

export default Route;