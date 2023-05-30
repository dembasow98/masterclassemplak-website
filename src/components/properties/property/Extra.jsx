import React from 'react'

const Extra = ({threeDPlan, floorPlan, apartmentsPlan, moreInfo}) => {

    //Here the pdfs are stored in a link:http://drive.google.com/uc?export=view&id=1pWC1UZjWZeEbhjn2eDwciiAjuFsAnf2y
    


    const handleButtonClick = (item) => {
        openLink(extractItemGoogleDriveLink(item));
    };

    //Form the url
     //TODO: Extract the image link from the google drive link shared link:
     const extractItemGoogleDriveLink = (link) => {

        const startIndex = link.indexOf("/d/") + 3; // Find the starting index of the ID
        const endIndex = link.indexOf("/view"); // Find the ending index of the ID
        const itemId = link.substring(startIndex, endIndex);
        // Form the embed link of the image
        const itemLink = `https://drive.google.com/uc?export=view&id=${itemId}`;
        return itemLink;
    };

    const openLink = (itemLink) => {

        window.open(itemLink, '_blank');
    };

  return (
    <div className="w-full px-6 rounded-lg my-3 flex flex-col gap-6 md:flex-row border border-gray-800 bg-gray-900 items-center justify-center">
        
        {/* <button 
            onClick={() => handleButtonClick(threeDPlan)}
            className="w-full md:w-2/3 py-2 px-2 bg-blue-800 hover:bg-blue-600 text-white font-bold text-lg rounded-md mt-4 mb-2"
            >
            3D Tour
        </button>
        <button 
            onClick={() => handleButtonClick(floorPlan)}
            className="w-full md:w-2/3 py-2 px-2 bg-blue-800 hover:bg-blue-600 text-white font-bold text-lg rounded-md mt-4 mb-2"
            >
            Floor Plan
        </button>
        <button 
            onClick={() => handleButtonClick(apartmentsPlan)}
            className="w-full md:w-2/3 py-2 px-2 bg-blue-800 hover:bg-blue-600 text-white font-bold text-lg rounded-md mt-4 mb-2"
            >
            Appartments Plan
        </button>
        <button 
            onClick={() => handleButtonClick(moreInfo)}
            className="w-full md:w-2/3 py-2 px-2 bg-blue-800 hover:bg-blue-600 text-white font-bold text-lg rounded-md mt-4 mb-2"
            >
            More info
        </button> */}
        {
            threeDPlan && (
                <button 
                    onClick={() => handleButtonClick(threeDPlan)}
                    className="w-full md:w-2/3 py-2 px-2 bg-blue-800 hover:bg-blue-600 text-white font-bold text-lg rounded-md mt-4 mb-2"
                    >
                    3D Tour
                </button>
            )
        }
        {
            floorPlan && (
                <button 
                    onClick={() => handleButtonClick(floorPlan)}
                    className="w-full md:w-2/3 py-2 px-2 bg-blue-800 hover:bg-blue-600 text-white font-bold text-lg rounded-md mt-4 mb-2"
                    >
                    Floor Plan
                </button>
            )
        }
        {
            apartmentsPlan && (
                <button 
                    onClick={() => handleButtonClick(apartmentsPlan)}
                    className="w-full md:w-2/3 py-2 px-2 bg-blue-800 hover:bg-blue-600 text-white font-bold text-lg rounded-md mt-4 mb-2"
                    >
                    Appartments Plan
                </button>
            )
        }
       

        {
            moreInfo &&(
                <button 
                    onClick={() => handleButtonClick(moreInfo)}
                    className="w-full md:w-2/3 py-2 px-2 bg-blue-800 hover:bg-blue-600 text-white font-bold text-lg rounded-md mt-4 mb-2"
                    >
                    More info
                </button>
            )
        }
    </div>
  )
}

export default Extra