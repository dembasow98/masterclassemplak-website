import React, {useState} from "react";
import separator from "../../../assets/images/separators/yellow/yel3.png";




const Search = () => {


  const [name, setName] = useState("");

  function handleSearchSubmit(event) {

    event.preventDefault();
    console.log({
      name,
    });
    // Your form submission logic here
  }
  return (
    <section className="w-full flex justify-center items-center">
      <div className = "w-full mx-4 md:mx-4 lg:mx-8 flex justify-center items-center">
        <form className="w-full my-4 flex flex-col md:flex-row bg-gray-800 lg:p-3 rounded-lg shadow-md consultancy-shadow-inset">
            <div className="flex flex-col content-center justify-center p-4 ">
                <div className = "w-full flex justify-center items-center">
                    <span className="w-full text-center text-xl sm:text-2xl md:text-3xl font-bold text-gray-200">
                        Find Real Estate News
                    </span>
                </div>
                <div className="flex justify-center">
                    <img src={separator} alt="yel1" />
                </div>
            </div>
            <div className="flex w-full flex-col sm:flex-row md:flex-col lg:flex-row p-2 lg:items-center">
                <div className="flex w-full h-full lg:h-fit  md:pt-2">
                    <input 
                        type="text"
                        className="form-control px-2 w-full rounded-sm focus:border-gray-500 text-gray-200 bg-gray-900  py-3 m-1"
                        required
                        placeholder="First Name"
                        name="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>

                <div className = "flex w-full lg:h-fit">
                    <button onClick={handleSearchSubmit} className="w-full mx-4 bg-red-600  hover:bg-red-700 text-white py-3 m-1 font-bold rounded">
                        Search
                    </button>
                </div>
            </div>
        </form>
      </div>
    </section>      
  )
}

export default Search;