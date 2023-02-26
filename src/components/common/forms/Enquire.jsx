import React, { useState } from "react";
import PhoneInput from "react-phone-number-input/input";
import "react-phone-number-input/style.css";
import yel2 from "../../../assets/images/separators/yellow/yel2.png";
const  Enquire =() =>{

  const [name, setName] = useState("");
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

  return (

    <div className="flex flex-col w-full mb-6">
        <div className="rounded-md m-4 bg-[#043334] my-2" id="side-contact-us">
            <hr className="border-1 mt-2 border-gray-400" />
            <div className="mt-3 mb-1 text-center font-bold text-2xl text-gray-200">
                Enquire About
                <br />
                This Property
            </div>
            <div className="w-full flex justify-center items-center">
                <img src = {yel2} alt = "separator" />
            </div>
            <div className="flex w-full flex-col justify-center items-center">
                <form onSubmit={handleSubmit} className="flex flex-col w-full items-center my-4 px-4">
                    <div className="form-group w-full flex">
                        <input 
                            type="text"
                            className="form-control w-full rounded-full focus:ring-1 focus:ring-red-300 px-4 py-2 my-3 bg-gray-200"
                            required
                            placeholder="First & Last Name"
                            name="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                        <div id="sideContactForm_info_error" className="hidden text-shadow-md text-sm pt-5 text-red-500">
                            Please enter your first and last name separated by a space (e.g. Jane Miller)
                        </div>
                    </div>
                    <div className="form-group w-full flex">
                        <input
                            type="email"
                            className="form-control w-full rounded-full focus:ring-1 focus:ring-red-300 px-4 py-2 my-3 bg-gray-200"
                            required
                            placeholder="Email"
                            name="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="form-group w-full flex">
                        <PhoneInput
                            placeholder="Phone"
                            className="form-control w-full rounded-full focus:ring-1 focus:ring-red-300 px-4 py-2 my-3 bg-gray-200"
                            name="phone"
                            required
                            value={phone}
                            onChange={setPhone}
                        />
                        <span id="sideContactForm_phone_error" className="vision hidden text-xs pt-5 text-white text-shadow-sm">
                            Please Write Your Full Phone Number
                        </span> 
                    </div>
                    <div className="w-full flex form-group" id="note">
                        <textarea
                            className="form-control w-full rounded-full focus:ring-1 focus:ring-red-300 px-4 py-2 my-3 bg-gray-200"
                            placeholder="Note"
                            name="note"
                            value={note}
                            onChange={(e) => setNote(e.target.value)}
                        ></textarea>
                    </div>
                    <div className="form-group w-full flex justify-center">
                        <textarea className="form-control w-full rounded-sm focus:ring-1 focus:ring-red-300 px-4 py-2 my-3 bg-gray-200" placeholder="Captcha" name="captcha" value={captcha} onChange={(e) => setCaptcha(e.target.value)}></textarea>
                    </div>
                    <div className="form-group flex w-full">
                        <button
                            type="submit"
                            className="text-white w-full bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                            id="sideContactForm_submit"
                        >
                            SEND
                        </button>
                    </div>
                </form>
            </div>
            <hr className="border-1 mb-2 border-gray-400" />
        </div>
    </div>
)}

export default Enquire;