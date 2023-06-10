import React from 'react';
import './Courses.css';
import CoursesImage from '../../assets/images/CoursesImage.png';
import { LiveSession } from '../../components';

const Courses = () => (
  <div>
    <div className='courses section__padding' id="home">
    <div className="courses-image">   
   <img className='courses-image1' src={CoursesImage} alt="Rectangle" />
   
    </div>
    <div className="courses-content">
      <h1 className="gradient__text">Accelerator Digital Marketing Course</h1>
      <p>Take a step  today to become Digital marketing genius and get certified by by Google, Meta, Microsoft and Jobberman. 
       Learn and earn even while you are still a student for <span>FREE</span></p>
      <button className='courses-button1'>Start Learning</button>
    </div>

    </div>
    <div className='live'>
      <LiveSession />
    </div>
     
  </div> 
  
);

export default Courses;
