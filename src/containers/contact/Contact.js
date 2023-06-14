import React from 'react';
import FAQs from './faqs/FAQs'; 
import './Contact.css';
import ContactUs from './ContactUs';
import ContentOption from './ContentOption';
const Contact = () => {
  return (
    <div className='contact'>  
     <div className="contact__header">
        <h1 className='contact__content'>Contact Us</h1>
       </div>
       <h2>FAQs</h2>
      <FAQs />
      <div className='contact__down'>
        <ContentOption />
        <ContactUs />
      </div>
    </div>
  )
}

export default Contact;