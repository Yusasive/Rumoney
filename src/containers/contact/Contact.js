import React from 'react';
import FAQs from './faqs/FAQs';
import NeedHelp from './NeedHelp';
import './Contact.css';
import ContactForm from './ContactForm';
const Contact = () => {
  return (
    <div className='contact'>  
      <div className='contact__content'>
      <h1>Contact Us</h1>
      </div>
      <FAQs />
      <div className='contact__down'>
        <NeedHelp />
        <ContactForm />
      </div>
    </div>
  )
}

export default Contact;
