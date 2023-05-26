import React, { Suspense, lazy } from "react";
import Banner from "./../components/common/banner/Banner";
import banner from "./../assets/images/banner/banner1.png";

import location from "./../assets/images/contact/location.png";
import email from "./../assets/images/contact/email.png";
import phone from "./../assets/images/contact/phone.png";


import  Spinner from "./../components/common/loader/Spinner.jsx";

import data from "./../data/contact/data.json";

const contact= data.contact;


const Card = lazy(()=>import("./../components/contact/card/Card.jsx"));
const Enquire = lazy(()=>import("./../components/contact/card/Enquire.jsx"));
const Map = lazy(()=>import("./../components/contact/map/Map.jsx"));



const Contact = () => {
    return (
      <main className="w-full flex flex-col items-center justify-center dark:bg-gray-900">
        <Banner title="CONTACT US" image={banner} description="Make all your questions answered" />
        <section className="flex flex-col px-8 py-8 md:flex-row justify-center md:justify-start md:items-start items-center">
          <div className="flex flex-col gap-8">
              <Suspense fallback={<Spinner />}>
                <Card logo={phone} itemname="Phone" title = {contact.phone} content="Call us anytime" />
                <Card logo={email} itemname="Email" title={contact.email} content="Send us an email" />
                <Card logo={location} itemname="Address" 
                  title={
                    <div className="flex w-full items-center justify-center flex-col">
                      <p className="text-center">{contact.address.title}</p>
                      <p className="font-medium">{contact.address.country}</p>
                    </div>
                  } 
                  content="Visit us anytime" 
                />
              </Suspense>
            </div>
            <div className="md:mx-6  lg:mx-12">
              <Suspense fallback={<Spinner />}>
                <Enquire 
                  title = "Contact Us For Free Consultation"
                  isModal = {false}
                  handleCloseModal = {() => {}}
                />
              </Suspense>
              <Suspense fallback={<Spinner />}>
                <Map 
                  title="Our Location"
                  width="100%"
                  height="400px"
                />
              </Suspense>
            </div>
        </section>
      </main>

    );
};

export default Contact;