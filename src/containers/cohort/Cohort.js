import React from 'react';
import './Cohort.css';
import CohortForm from './CohortForm';

const Cohort = () => {
  return (
    <div className='cohort'>
       <div className="cohort__header">
        <h1 className='cohort__content'>Join Our Next Cohort</h1>
       </div>
       <div className='cohortform'>
        <h2>Application Form</h2>
       <CohortForm  />
       </div>
    </div>
  )
}

export default Cohort;
