import React from 'react';
import './About.css';
import Certified from '../../components/certified/Certified'
import Unique from './Unique';
import Vision from './vision';
import UniqueSME from './UniqueSME';
import Journey from './Journey';
const About = () => {
  return (
    <div className='about'>
       <div className="about__header">
        <h1 className='about__content'>About Us</h1>
       </div>
       <div>
        <Certified />
        <Vision />
        <Unique />
        <UniqueSME />
        <Journey />
       </div>
    </div>
  )
}

export default About
