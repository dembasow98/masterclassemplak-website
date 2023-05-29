import React, {useState, useRef} from "react";
import separator from "../../../assets/images/separators/yellow/yel3.png";

//React phone input
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
//Google recaptcha
import ReCAPTCHA from "react-google-recaptcha";



const Consultancy = () => {


  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [note, setNote] = useState("");
  const [captcha, setCaptcha] = useState("");

  function handleConsultancySubmit(event) {

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
    <section className="w-full mt-8 flex  justify-center  bg-gray-900 items-center">
      <div className = "w-full flex justify-center items-center">
        <form className="w-full flex  flex-col  p-6  rounded-lg shadow-md consultancy-shadow-inset">
          <div className = "w-full flex justify-center pt-2 items-center">
            <span className="w-full text-center text-2xl font-bold text-gray-200">Contact us for Free Consultancy</span>
          </div>
          <div className="flex pb-4 justify-center">
            <img src={separator} alt="yel1" />
          </div>
          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-3">
            <div className="relative">
              <input 
                  type="text"
                  className="form-control w-full rounded-sm focus:ring-1 text-gray-200 bg-black border border-gray-800 focus:ring-red-300 px-4 py-2 my-3 "
                  required
                  placeholder="First Name"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div className="relative">
              <input 
                  type="text"
                  className="form-control w-full text-gray-200 bg-black border border-gray-800 rounded-sm focus:ring-1 focus:ring-red-300 px-4 py-2 my-3"
                  required
                  placeholder="Last Name"
                  name="surname"
                  value={surname}
                  onChange={(e) => setSurname(e.target.value)}
              />
            </div>
            <div className="relative">
                <input
                    type="email"
                    className="form-control w-full text-gray-200 bg-black border border-gray-800 rounded-sm focus:ring-1 focus:ring-red-300 px-4 py-2 my-3"
                    required
                    placeholder="Email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>
            <div className="relative flex w-full justify-center items-center">
                  <PhoneInput
                      inputStyle={{width: '100%', height: '100%', color: 'black',}}
                      country={'tr'}
                      placeholder="Phone"
                      className="form-control   w-full text-black border-gray-800 bg-black h-10 rounded-sm border hover:focus:ring-1 focus:ring-red-300"
                      name="phone"
                      required
                      value={phone}
                      
                      onChange={phone => setPhone(phone)}
                  />
              </div>
            
          </div>
          <div className="gap-4 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 w-full items-center">
            <div className=" flex w-full justify-center items-center">
                <textarea
                    className="form-control w-full bg-black border text-gray-300 border-gray-800  md:w-[600px] rounded-sm focus:ring-1 focus:ring-red-300 px-4 py-2 my-3"
                    placeholder="Note"
                    name="note"
                    value={note}
                    onChange={(e) => setNote(e.target.value)}
                ></textarea>
              </div>
              <div className="justify-center flex items-center">
                  <ReCAPTCHA
                    ref = {recaptchaRef}
                    sitekey = {SITE_KEY}
                    onChange = {captchaOnChange}
                    className="w-full flex justify-center"
                    theme="dark"
                    size = "normal"
                  />
              </div>
               <div className = "w-full justify-end flex items-center">
                <button onClick={handleConsultancySubmit} className="w-full py-4 bg-red-600  hover:bg-red-700 text-white font-bold rounded">
                  SEND
                </button>
              </div>
          </div>
            
        </form>
      </div>
    </section>      
  )
}

export default Consultancy;