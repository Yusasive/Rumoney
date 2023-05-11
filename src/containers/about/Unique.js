import React from 'react';
import './About.css';
import Prosperity from '../../assets/images/Prosperity.png';

const Unique = () => {
  return (
    <div className='unique'>
      <div className='unique__content1'>
        <h1>Why We're Unique 
To Students</h1>
       <p>We raise world-class Digital Marketing talents</p>
       <p>Learning is practical and easily accessible on any device</p>
       <p>Learn from experienced mentors and top experts in digital marketing</p>
       <button>Start Learning</button>
  
      </div>
      <div className='unique__content2'>
      <p>Get ready for global opportunities, learn and get certified by META, Google and co</p>
       <p>Get Hands on experience in our internship phase</p>
       <p>Access job opportunities on our platform.</p>
       <button>Start Learning</button>
      </div>
      <img className='prosperity' src={Prosperity} alt="Prosperity" />
    </div>
  )
}

export default Unique;

