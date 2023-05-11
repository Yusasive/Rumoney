import React from 'react';
import './About.css';
import Pattern from '../../assets/images/pattern.png';
import Rumoney1 from '../../assets/images/rumoney1.png';
const vision = () => {
  return (
    <div className='vision'>
          <img className='pattern' src={Pattern} alt="HeroBanner" />
      <div className='vision__mission'>
        <h1>Our Mission</h1>
        <p>To be Africa's foremost quality talent provider.</p>
        <h1>Our Vision</h1>
        <p>To empower 1 Million African students and youths with Digital Marketing skills by 2024 through trainings, resources and access to opportunities.</p>
      </div>
      <img className='rumoney1' src={Rumoney1} alt="Rumoney" />
    </div>
  )
}

export default vision;
