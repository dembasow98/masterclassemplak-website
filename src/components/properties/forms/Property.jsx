import React from 'react';

const Property = ({ type, favoriteButton, title, description, profileImage, location, toilets, bedrooms }) => {
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <div className="relative">
        <div className="absolute top-0 left-0 bg-blue-700 text-white rounded-bl-lg py-1 px-2">{type}</div>
            <button className="absolute top-0 right-0 p-1">
            {favoriteButton ? (
                <svg className="w-6 h-6 fill-current text-blue-700" viewBox="0 0 24 24">
                <path d="M12 2C7.03 2 3 6.13 3 11c0 4.17 2.67 7.74 6.39 9.02L12 22l2.61-1.98C18.33 18.74 21 15.17 21 11c0-4.87-4.03-9-9-9zm4.61 13.87l-.61.47-.61-.47C13.22 15.25 12.64 15 12 15c-.64 0-1.22.25-1.61.87l-.61.47-.61-.47C7.78 14.25 6.36 12.89 6.08 11c-.06-.45.09-.92.43-1.27.35-.35.82-.54 1.3-.47L9 9.35l.92-.72C10.35 8.25 11.67 8.25 13 8.25s2.65 0 3.08.38l.92.72 1.19-.92c.48-.07.95.12 1.3.47.34.35.49.82.43 1.27-.28 1.89-1.7 3.25-3.39 3.87z" />
                </svg>
            ) : (
                <svg className="w-6 h-6 fill-current text-gray-400" viewBox="0 0 24 24">
                <path d="M17.66 4.34a6 6 0 00-8.48 0L12 5.16l1.82-1.82a6 6 0 000 8.48L12 17.12l-1.82-1.82a6 6 0 00-8.48 0 6 6 0 000 8.48l10.6 10.6a6 6 0 008.48 0l10.6-10.6a6 6 0 000-8.48l-10.6-10.6zM12 15.66l-4.24-4.24a4 4 0 015.66 0L12 15.66z" />
                </svg>
            )}
            </button>
            <a href="#">
            <img className="rounded-t-lg" src={profileImage} alt={title} />
            </a>
        </div>
        <div className="p-5">
            <a href="#">
            <h5 className="mb-2 text-2xl font-bold">{title}</h5>
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
