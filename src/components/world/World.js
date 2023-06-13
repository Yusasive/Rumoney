import React from 'react';
import "./World.css";
import { Link } from 'react-router-dom';

const World = () => {
  return (
    <div className='world'>
     <h1>Build A World class Brand </h1>
     <Link to='/hire-marketers'> <button>Hire Talents Now</button></Link>
    </div>
  )
}

export default World;
