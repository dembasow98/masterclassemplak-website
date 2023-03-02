import React, {useState} from "react";
import {HiSelector} from "react-icons/hi";
import separator from "../../../assets/images/separators/yellow/yel3.png";

const Filter = () => {


  const [filterData, setFilterData] = useState({
    referenceId: "",
    city: "",
    type: "",
    minPrice: "",
    maxPrice: "",
    bedrooms: "",
  });

  //Handle the form input changes
  const handleFilterChange = (e) => {
    const {name, value} = e.target;
    setFilterData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };


  //Get the data after the form is submitted
  const handleFilterSubmit = (e) => {
    e.preventDefault();
    console.log(filterData);


    //TODO: Send the data to the backend


    //TODO: Reset the form
    setFilterData({
      referenceId: "",
      city: "",
      type: "",
      minPrice: "",
      maxPrice: "",
      bedrooms: "",
    });
  };

  return (
    <section className="w-full my-6 flex justify-center items-center">
      <div className = "w-full flex justify-center items-center">
        <form onChange={handleFilterChange} className="w-full flex  flex-col bg-white dark:bg-gray-800 px-6 pt-4 pb-2 rounded-lg shadow-md filter-shadow-inset">
          <div className = "w-full flex justify-center pt-2 items-center">
            <span className="w-full text-center text-2xl font-bold text-gray-700 dark:text-gray-200">
              Find Your Appropriate Property
            </span>
          </div>
          <div className="flex pb-4 justify-center">
                <img src={separator} alt="yel1" />
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
            <div className="mb-4">
              <div className="relative">
                <input placeholder="Reference ID"  type="text" name="referenceId" value={filterData?.referenceId} className="block appearance-none w-full bg-white dark:text-gray-200 dark:bg-gray-900 border-gray-400 hover:border-gray-500 px-2 py-2 rounded shadow leading-tight focus:outline-none focus:border-gray-400 focus:shadow-outline" id="referenceId" />
              </div>
            </div>
            <div className="mb-4">
                <div className="relative">
                    <select 
                      
                      value={filterData.city}
                      name="city"
                      className="block appearance-none w-full bg-white dark:text-gray-200 dark:bg-gray-900 border-gray-400 hover:border-gray-500 px-2 py-2 rounded shadow leading-tight focus:outline-none focus:shadow-outline" id="heating">
                        <option>City</option>
                        <option>All</option>
                        <option>Ankara</option>
                        <option>Istanbul</option>
                        <option>Oil</option>
                        <option>Wood</option>
                        <option>Other</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                        <HiSelector className="dark:text-gray-100"/>
                    </div>
                </div>
              </div>
              

              <div className="mb-4">
                  <div className="relative">
                      <select 
                        
                        value={filterData.type}
                        name="type"
                        className="block appearance-none w-full bg-white dark:text-gray-200 dark:bg-gray-900 border-gray-400 hover:border-gray-500 px-2 py-2 rounded shadow leading-tight focus:outline-none focus:shadow-outline" id="heating">
                          <option>Type</option>
                          <option>All</option>
                          <option>Apartment</option>
                          <option>House</option>
                          <option>Basement</option>
                          <option>Office</option>
                          <option>Other</option>
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                      <HiSelector className="dark:text-gray-100"/>
                      </div>
                  </div>
              </div>

              <div className="mb-4">
                  <div className="relative">
                      <select 
                        
                        value={filterData.minPrice}
                        name="minPrice"
                        className="block appearance-none w-full bg-white dark:text-gray-200 dark:bg-gray-900 border-gray-400 hover:border-gray-500 px-2 py-2 rounded shadow leading-tight focus:outline-none focus:shadow-outline" id="heating">
                          <option>Minimum Price</option> 
                          <option>$3000</option>
                          <option>$4000</option>
                          <option>$5000</option>
                          <option>$6000</option>
                          <option>$7000</option>
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                        <HiSelector className="dark:text-gray-100"/>
                      </div>
                  </div>
              </div>
              <div className="mb-4">
                  <div className="relative">
                      <select 
                        
                        value={filterData.maxPrice}
                        name="maxPrice"
                        className="block appearance-none w-full bg-white dark:text-gray-200 dark:bg-gray-900 border-gray-400 hover:border-gray-500 px-2 py-2 rounded shadow leading-tight focus:outline-none focus:shadow-outline" id="heating">
                          <option>Maximum Price</option>
                          <option>$6000</option>
                          <option>$7000</option>
                          <option>$8000</option>
                          <option>$9000</option>
                          <option>$10000</option>
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                        <HiSelector className="dark:text-gray-100"/>
                      </div>
                  </div>
              </div>

              
              <div className="mb-4">
                  <div className="relative">
                      <select 
                        value={filterData.bedrooms}
                        name="bedrooms"
                        className="block appearance-none w-full bg-white dark:text-gray-200 dark:bg-gray-900 border-gray-400 hover:border-gray-500 px-2 py-2 rounded shadow leading-tight focus:outline-none focus:shadow-outline" id="heating">
                          <option> Bedrooms</option>
                          <option>All</option>
                          <option>1</option>
                          <option>2</option>
                          <option>3</option>
                          <option>4</option>
                          <option>5</option>
                          <option>6</option>
                          <option>7</option>
                          <option>8</option>
                          <option>9</option>
                          <option>10</option>
                          <option>11+</option>
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                        <HiSelector className="dark:text-gray-100"/>
                      </div>
                  </div>
                  <div className = "w-full flex justify-center items-center sm:w-full  pt-4">
                    <button onClick={handleFilterSubmit} className="w-full bg-blue-500 mx-4 dark:bg-red-600  hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                      Search
                    </button>
                  </div>
              </div>
          </div>
        </form>
      </div>
    </section>

            
  )
}

export default Filter