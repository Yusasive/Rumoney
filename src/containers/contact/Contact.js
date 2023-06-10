import React from 'react';
import FAQs from './faqs/FAQs'; 
import './Contact.css';
import ContactUs from './ContactUs';
const Contact = () => {
  return (
    <div className='contact'>  
     <div className="contact__header">
        <h1 className='contact__content'>About Us</h1>
       </div>
      <FAQs />
      <div className='contact__down'>
        
        <ContactUs />
      </div>
    </div>
  )
}

export default Contact;
