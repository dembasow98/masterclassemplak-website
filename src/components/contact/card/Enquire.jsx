import React, { useState, useRef } from "react";

//React phone input
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'

import yel2 from "../../../assets/images/separators/yellow/yel2.png";

//Google recaptcha
import ReCAPTCHA from "react-google-recaptcha";

import {IoCloseSharp} from "react-icons/io5";
import LazyLoad from "react-lazy-load";


const  Enquire =({title, isModal, handleCloseModal}) =>{

  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [note, setNote] = useState("");
  const [captcha, setCaptcha] = useState("");

  function handleSubmit(event) {

    event.preventDefault();
    console.log({
      name,
      email,
      phone,
      note,
      captcha,
    });
    // Your form submission logic here
  }

  //Google recaptcha
    //const SITE_KEY = process.env.REACT_APP_RECAPTCHA_SITE_KEY;

    const SITE_KEY = "6LfngbwkAAAAACV2WmeXRt9Pr951pXY-6xLMBpIZ";


    const recaptchaRef = useRef(null);
    //const recaptchaValue = recaptchaRef.current.getValue();

    const captchaOnChange = (value) => {
        console.log("Captcha value:", value);
        setCaptcha(value);
    }


  return (
    <div className="flex flex-col w-full mb-8">
        <div className="rounded-3xl bg-[#043334]" id="side-contact-us">
            {
                isModal ? (
                <div className="w-full mt-3 mb-1 flex flex-row justify-center items-center text-center font-bold text-2xl text-gray-200 relative">
                    <div className="fle w-full justify-center items-center">
                        {title}
                    </div>
                    <div className="absolute right-2 justify-center items-center">
                        <button className="hover:text-gray-100" onClick={handleCloseModal}>
                            <IoCloseSharp className="text-2xl text-gray-300" />
                        </button>
                    </div>
                </div>
            ):(
                <div className="mt-3 mb-1 text-center font-bold text-2xl lg:text-3xl text-gray-200">
                    <div className="flex justify-center items-center">
                        {title}
                    </div>
                </div>
            )}
            
            <div className="w-full flex justify-center items-center">
                <img src = {yel2} alt = "separator" />
            </div>
            <div className="flex w-full flex-col justify-center items-center">
                <form onSubmit={handleSubmit} className="flex flex-col w-full items-center my-4 px-4">
                    <div className="form-group w-full flex flex-row sm:grid sm:grid-cols-2 md:flex gap-4">
                        <div className="form-group w-full flex">
                            <input 
                                type="text"
                                className="form-control w-full rounded-sm focus:ring-1 focus:ring-red-300 px-4 py-2 my-3 bg-gray-200"
                                required
                                placeholder="First Name"
                                name="name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                            <div id="sideContactForm_info_error" className="hidden text-shadow-md text-sm pt-5 text-red-500">
                                Please enter your first
                            </div>
                        </div>
                        <div className="form-group w-full flex">
                            <input 
                                type="text"
                                className="form-control w-full rounded-sm focus:ring-1 focus:ring-red-300 px-4 py-2 my-3 bg-gray-200"
                                required
                                placeholder="Last Name"
                                name="surname"
                                value={surname}
                                onChange={(e) => setSurname(e.target.value)}
                            />  
                            <div id="sideContactForm_info_error" className="hidden text-shadow-md text-sm pt-5 text-red-500">
                                Please enter your last name
                            </div>
                        </div>
                    </div>
                    <div className="form-group w-full flex flex-row sm:grid sm:grid-cols-2 md:flex gap-4">
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
                        <div className="form-group w-full flex items-center">
                            <PhoneInput
                                inputStyle={{width: '100%', height: '100%'}}
                                country={'tr'}
                                placeholder="Phone"
                                className="form-control w-full h-10 rounded-sm border hover:focus:ring-1 focus:ring-red-300 bg-gray-200"
                                name="phone"
                                required
                                value={phone}
                                onChange={phone => setPhone(phone)}
                            />
                            <span id="sideContactForm_phone_error" className="vision hidden text-xs pt-5 text-white text-shadow-sm">
                                Please Write Your Full Phone Number
                            </span> 
                        </div>
                    </div>
                    <div className="w-full flex form-group" id="note">
                        <textarea
                            className="form-control w-full rounded-sm focus:ring-1 focus:ring-red-300 px-4 py-2 my-3 bg-gray-200"
                            placeholder="Your message here..."
                            name="note"
                            value={note}
                            onChange={(e) => setNote(e.target.value)}
                        ></textarea>
                    </div>
                    <div className="w-full flex flex-col xl:flex-row justify-center gap-4 items-center">
                        <div className="form-group  w-[200px] xl:w-full items-cover  flex justify-center my-4 items-center">
                           <LazyLoad>
                                <ReCAPTCHA
                                    ref = {recaptchaRef}
                                    sitekey = {SITE_KEY}
                                    onChange = {captchaOnChange}
                                    className="w-full flex justify-center"
                                    //Add size
                                    size = "normal"
                                    //Add theme
                                    theme = "dark"
                                />
                            </LazyLoad>
                        </div>
                        <div className="form-group flex w-full mb-2">
                            <button
                                type="submit"
                                className="text-white w-full bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-sm text-md md:text-lg lg:text-xl py-4 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
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

export default Enquire;