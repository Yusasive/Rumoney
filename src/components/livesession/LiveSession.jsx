import React from 'react';
import "./LiveSession.css";
import Image1 from '../../assets/images/Image1.png';
import Image2 from '../../assets/images/Image2.png'

const LiveSession = () => {
  return (
    <div className='Live'>
      <h1>Watch some of our live sessions to get started with learning Digital  Marketing</h1>
      <div className='Live-image'>
        <img src={Image1} alt="Image1" />
        <img src={Image2} alt="Image2" />
      </div>
    </div>
  )
}

export default LiveSession;
