import React from 'react';
import './Hire.css';
import Hand from '../../assets/images/Hand.png';
import { Link } from 'react-router-dom';

const Hire = () => (
  <div className="hire section__padding" id="home">
    <div className="hire-content">
      <h1 className="gradient__text">Hire Top Digital  <br />Marketers for Your <br /> <span>Business</span></h1>
      <p>Get matched with the best Digital Marketer for your business quickly and easily.</p>

  
      <Link  to='/hire-marketers'> <button className='hire-button1'>Hire Marketers</button></Link> 
    </div>
<div className="hire-image">   
   <img className='hire-image1' src={Hand} alt="Rectangle" />
   
    </div>
  </div> 
  
);

export default Hire;