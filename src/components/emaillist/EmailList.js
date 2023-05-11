import React from 'react';
import "./EmailList.css";
import Partner from '../../assets/images/pattern.png'
const EmailList = () => {
  return (
    <div className='email__list'>
    <img className='email__image' src={Partner} alt="Email_List" />
    <div className="email__content"> 
    <h1>Know What We Are Up To</h1>
     <p>Be the first to get updates from our fast growing community of talents</p>
     <input type="email" /> <button>Subscribe</button></div>
     <img className='email__image' src={Partner} alt="Email_Image" />
    </div>
  )
}

export default EmailList;
