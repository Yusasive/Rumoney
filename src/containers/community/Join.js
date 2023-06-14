import React from 'react';
import Col from 'react-bootstrap/Col';
import JoinImage from '../../assets/images/community.png';

const Join = () => {
  return (
    <div className='Join'>

    <h2>Join Our Student Community</h2>
    <h6>Learn, grow and become a Digital Marketing Genius with other great minds. Be the first to get updates on our learning resources, events and opportunities.</h6>
    <Col xs={6} md={4}>    <img src={JoinImage} alt="Join" />   </Col>

    </div>
  )
}

export default Join;
