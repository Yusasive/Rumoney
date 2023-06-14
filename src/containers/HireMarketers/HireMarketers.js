import React from 'react';
import './HireMarketer.css';
import HireForm from './HireForm';

const HireMarketers = () => {
  return (
    <div className='hire-marketer'>
       <div className="hire-marketer__header">
        <h1 className='hire-marketer__content'>Hire Marketers Here!</h1>
       </div>
       <div className='hireform'>
        <h2>Application Form</h2>
        <HireForm />
       </div>
    </div>
  )
}

export default HireMarketers;
