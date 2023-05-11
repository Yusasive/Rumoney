import React from 'react';
import './Contact.css';
import {FaVoicemail} from 'react-icons/fa';
const NeedHelp = () => {
  return (
    <div className='NeedHelp'>
      <h1>Need Some Help?</h1>
      <p>If you have some questions or want to partner, Rumoney staff are always available to  answer your questions</p>
      <FaVoicemail className='social' /> <h5>Email: rumoney@gmail.com</h5>
    </div>
  )
}

export default NeedHelp;
