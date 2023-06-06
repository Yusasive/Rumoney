import React from 'react';
import "./Gain.css";
import Learn from '../../assets/icons/Learn.png';
import Experience from '../../assets/icons/Experience.png';
import Earn from '../../assets/icons/earn.png';


const Gain = () => {
  return (
    <div className='gain'>
    <div className='gain-content'>
      <h1>What you stand to gain as a <span>student</span></h1>
      <p>Rumoney is the world’s biggest Digital marketing learning community where we have global experts to empower students on relevant digital skills for FREE</p>
      <button className='button1'>Start Learning Now</button>
    </div>
      <div className='gain-grid'>
        <div className="grid a">
        <img src={Learn} alt="Learn" />
        <h1>Learn from the best</h1>
        <p>Learn from top mentors and experts curated specially to make learning easy and fun for you.</p>
        </div>
        <div className='grid b'>
        <img src={Experience} alt="Experience" />
          <h1>Real time experience</h1>
          <p>Gain Hands on experience throughout your internship program. Assessments will be given after each class.</p>
        </div>
        <div className="grid c">
        <img src={Earn} alt="Earn" />
        <h1>Earn as you learn</h1>
        <p>keep SAPA away by accessing job opportunities to earn while still in school and build your work experience history before graduation</p>
        </div>
      </div>
    </div>
  )
}

export default Gain
