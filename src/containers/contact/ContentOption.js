import React from 'react';
import {FaTwitter, FaFacebook, FaInstagram, FaLinkedin} from 'react-icons/fa';

const ContentOption = () => {
  return (
    <div>
      
        <h2>Need Some Help?</h2>
        <h6>If you have some questions or want to partner, Rumoney staff are always available to  answer your questions</h6>
       <a href="https://yusufabdullahi@gmail.com">Email:yusufabdullahi@gmail.com</a>
      
       <h2 className="text-uppercase">Follow Us</h2>
                          <div className='footer-icons'>
                         <a class="text-muted w-auto p-3" target="_blank" href="www.facebook.com"><FaFacebook className='social' /></a>
                         <a class="text-muted w-auto p-3" target="_blank" href="www.linkedin.com"><FaLinkedin className='social' /></a>
                         <a class="text-muted w-auto p-3" target="_blank" href="www.twitter.com"><FaTwitter className='social' /></a>
                         <a class="text-muted w-auto p-3" target="_blank" href="www.instagram.com"><FaInstagram className='social' /></a>
      </div>
    </div>
  )
}

export default ContentOption;
