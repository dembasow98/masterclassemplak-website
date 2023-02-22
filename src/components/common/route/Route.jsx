import React from 'react';
import { Link } from 'react-router-dom';


const Route = ({ icon, route }) => {
  return (
    <div className="w-rull dark:bg-gray-900 flex items-center justify-center ">
      <img src={icon} alt="Icon" className="h-8 mr-2" />
      <Link to={route} className="text-lg font-medium text-gray-900 hover:text-gray-700">
        {route}
      </Link>
    </div>
  );
};

export default Route;
