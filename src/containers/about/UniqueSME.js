import React from 'react';
import omale from '../../assets/images/omale.png';
import './About.css';
const UniqueSME = () => {
  return (
    <div className='unique__sme'>
      <img className='omale' src={omale} alt="" />
      <div className='unique__sme__content1'>
        <h1>Why We're Unique 
To SME’s</h1>
        <p>We make hiring "fast" and easy</p>
        <p>Affordable Pricing; Find the Best talent for your business just at the size of your budget (Check Marketer Hire for Reference)</p>
        <p>Get trained, proven and vetted talents</p>
        <button>Hire A Marketer</button>
      </div>
      <div className='unique__sme__content2'>
       <p>Personal Support - We'll work directly with you to help you ease the process and handmatch the best talent for your business.</p>
        <p>Our talents are world class (Certified by Google & Co)</p>
        <button>Hire A Marketer</button>
      </div>
    </div>
  )
}

export default UniqueSME;
