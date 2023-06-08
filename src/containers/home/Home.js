import React from 'react';
import {HeroSection, Certified, Gain, CTA, Testimonial, EmailList, LiveSession} from '../../components';
const Home = () => {
  return (
    <div>
    <HeroSection /> 
    <Certified />
    <Gain />
    <CTA />
    <Testimonial />
    <LiveSession />
    <EmailList />
    </div>
  )
}

export default Home;