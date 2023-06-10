import React from 'react'
import CommunityForm from './CommunityForm'
import Join from './Join';
import './Community.css';

const Community = () => {
  return (
    <div className='community'>
      <div className="community__header">
        <h1 className='community__content'>Community</h1>
       </div>
      <Join />
      <CommunityForm   />
    </div>
  )
}

export default Community
