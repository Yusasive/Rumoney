import React from 'react';
import {EmailList, HeroSection, Certified, Gain, CTA, Testimonial, LiveSession} from '../../components';
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