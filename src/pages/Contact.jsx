import React from "react";
import Banner from "./../components/common/banner/Banner";
import banner from "./../assets/images/banner/banner1.png";

import { Card, Map, Enquire} from "./../components/contact";
import location from "./../assets/images/contact/location.png";
import email from "./../assets/images/contact/email.png";
import phone from "./../assets/images/contact/phone.png";
//import the send email form
//import Enquire from "./../components/common/forms/Enquire";


const Contact = () => {
    return (
      <main className="w-full flex flex-col items-center justify-center dark:bg-gray-900">
        <Banner title="CONTACT US" image={banner} description="Make all your questions answered" />
        <section className="flex flex-col px-8 md:flex-row gap-8">
          <div className="py-10 flex flex-col gap-8">
            <Card logo={phone} itemname="Phone" title="+90 555 555 55 55" content="Call us anytime" />
            <Card logo={email} itemname="Email" title="info@masterclassemlak.com" content="Send us an email" />
            <Card logo={location} itemname="Address" title="Turkey" content="Visit us anytime" />
          </div>
          <div className="py-8 flex flex-col gap-8">
            <Enquire 
              title = "Contact Us For Free Consultation"
              isModal = {false}
              handleCloseModal = {() => {}}
            />
            <Map />
          </div>
        </section>
      </main>

    );
};

export default Contact;