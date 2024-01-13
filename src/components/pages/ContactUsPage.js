import React from 'react';
import ContactUs from '../layout/contact/ContactUs';
import Navbar from '../layout/home/Navbar';
import ContactCallToAction from '../layout/contact/ContactCallToAction';
import Footer from '../layout/home/Footer';

const ContactUsPage = () => {
  return (
    <div>
      <Navbar />
      <ContactUs />
      <ContactCallToAction />
      <Footer />
    </div>
  );
};

export default ContactUsPage;
