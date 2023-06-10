import React from 'react';
import JoinImage from '../../assets/images/community.png';

const Join = () => {
  return (
    <div className='Join'>
  <div class="jumbotron jumbotron-fluid">
  <div class="container">
    <h1 class="display-4">Fluid jumbotron</h1>
    <p class="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
    <img src={JoinImage} alt="JoinImage" class="rounded-0" />
  </div>
</div>
    </div>
  )
}

export default Join;
