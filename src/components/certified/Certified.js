import React from 'react';
import './Certified.css';
import Google from '../../assets/icons/Google.png';
import Meta from '../../assets/icons/meta.png';
import Microsoft from '../../assets/icons/microsoft-5.png';
import Jobberman from '../../assets/icons/JobberMan.png';


const Certified = () => {
  return (
    <div className='certified'>
      <h5>Our Students Are Certified By</h5>
    <div className="certified-image">  
    <img src={Google} alt="Google" />
      <img src={Meta} alt="Meta" />
      <img src={Microsoft} alt="Microsoft" />
      <img src={Jobberman} alt="Jobberman" /></div>
    </div>
  )
}

export default Certified
