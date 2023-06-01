import React, { useState } from "react";

import yel2 from "../../../assets/images/separators/yellow/yel2.png";



//import Spinner from "../../common/loader/Spinner.jsx";
//Google recaptcha
//const ReCAPTCHA = lazy(() => import("react-google-recaptcha"));


const  Comment =({title}) =>{

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  //const [phone, setPhone] = useState("");
  const [note, setNote] = useState("");
  //const [captcha, setCaptcha] = useState("");

  function handleSubmit(event) {

    event.preventDefault();
    console.log({
      name,
      email,
      //phone,
      note,
      //captcha,
    });
    // Your form submission logic here
  }

  //Google recaptcha
    // const SITE_KEY = process.env.REACT_APP_RECAPTCHA_SITE_KEY;



    // const recaptchaRef = useRef();
    // //const recaptchaValue = recaptchaRef.current.getValue();

    // const captchaOnChange = (value) => {
    //     console.log("Captcha value:", value);
    //     setCaptcha(value);
    // }


  return (
    <div className="flex flex-col w-full mb-4">
        <div className="rounded-3xl bg-[#043334] my-2" id="side-contact-us">
            <div className="mt-3 mb-1 text-center font-bold text-2xl text-gray-200">
                <div className="flex justify-center items-center">
                    {title}
                </div>
            </div>
            
            <div className="w-full flex justify-center items-center">
                <img src = {yel2} alt = "separator" />
            </div>
            <div className="flex w-full flex-col justify-center items-center">
                <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 w-full gap-4 items-center my-4 px-4">
                    <div className="form-group w-full flex flex-col lg:flex-row  sm:gap-3 md:gap-4">
                        <div className="form-group w-full flex">
                            <input 
                                type="text"
                                className="form-control w-full rounded-sm focus:ring-1 focus:ring-red-300 px-4 py-2 my-3 bg-gray-200"
                                required
                                placeholder="First & Last Name"
                                name="name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                           
                        </div>

                        <div className="form-group w-full flex">
                        <input
                            type="email"
                            className="form-control w-full rounded-sm focus:ring-1 focus:ring-red-300 px-4 py-2 my-3 bg-gray-200"
                            required
                            placeholder="Email"
                            name="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                       
                    </div>
                    
                    <div className="w-full flex form-group" id="note">
                        <textarea
                            className="form-control w-full rounded-sm focus:ring-1 focus:ring-red-300 px-4 py-2 my-3 bg-gray-200"
                            placeholder="Your Comment..."
                            name="note"
                            value={note}
                            onChange={(e) => setNote(e.target.value)}
                        ></textarea>
                    </div>
                    <div className = "w-full flex flex-col lg:flex-row  sm:gap-3 md:gap-4">
                    {/* <div className="form-group w-full flex justify-center my-2 items-center">
                        <Suspense fallback={<Spinner/>}>         
                            <ReCAPTCHA
                                //inputStyle={{width: '100%', height: '100%'}}
                                ref = {recaptchaRef}
                                sitekey = {SITE_KEY}
                                onChange = {captchaOnChange}
                                className="w-full flex justify-center"
                                //Add size
                                size = "normal"
                                //Add theme
                                theme = "dark"
                            />
                         </Suspense>
                    </div> */}
                    <div className="form-group flex w-full my-2 lg:my-4 lg:mx-6 lg:px-6">
                        <button
                            type="submit"
                            className="text-white lg:text-2xl w-full bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-sm text-sm py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                            id="sideContactForm_submit"
                        >
                            SEND
                        </button>
                    </div>
                   </div>
                </form>
            </div>
        </div>
    </div>
)}

export default Comment;