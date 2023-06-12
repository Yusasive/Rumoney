import React from 'react';
import './HeroSection.css';
import Rectangle from '../../assets/images/Image(2).png';
import { Link } from 'react-router-dom';

const HeroSection = () => (
  <div className="hero section__padding" id="home">
    <div className="hero-content">
      <h1 className="gradient__text">Become a digital <br /> marketing <span>Genius</span></h1>
      <p>Learn digital marketing from top experts over Africa and get ready to access global opportunities.</p>
      <Link  to='/cohort'>  <button className='hero-button1'>Start Learning</button></Link>
      <Link to='/hire-markerters'>   <button className='hero-button2'>Hire Marketer</button></Link>
    </div>
<div className="hero-image">   
   <img className='hero-image1' src={Rectangle} alt="Rectangle" />
   
    </div>
  </div> 
  
);

export default HeroSection;