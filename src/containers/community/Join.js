import React from 'react';
import JoinImage from '../../assets/images/community.png';
import './Community.css';
const Join = () => {
  return (
    <div className='Join'>

    <h2>Join Our Student Community</h2>
    <h6>Learn, grow and become a Digital Marketing Genius with other great minds. Be the first to get updates on our learning resources, events and opportunities.</h6>
   <img className='joinimage' src={JoinImage} alt="Join" />   

    </div>
  )
}

export default Join;
