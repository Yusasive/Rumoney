import React from "react";
import './Footer.css';
import {FaTwitter, FaFacebook, FaInstagram, FaLinkedin} from 'react-icons/fa';
import Rumoney from '../../assets/images/logo.png';
import { Link } from 'react-router-dom';

const Footer = () => 
<footer className="page-footer font-small blue pt-4">
    <div className="container-fluid text-center text-md-left">
        <div className="row">
            <div className="col-md-6 mt-md-0 mt-3">
            <img className="footer-image" src={Rumoney} alt="Rumoney" />                <p>Africa's Foremost Digital Marketing Learning Community & IT Talent Recruitment Platform</p>
            </div>

            <hr className="clearfix w-100 d-md-none pb-0"/>

            <div className="col-md-3 mb-md-0 mb-3">
                <h5 className="text-uppercase">Quick Links</h5>
                <ul  class="text-white " className="list-unstyled">
                <li><a  class="text-muted text-decoration-none" href='/'> Students</a></li>
                <li><a class="text-muted text-decoration-none" href='/hiretalents'> Hire Talents</a></li>
                <li><a class="text-muted text-decoration-none" href='/courses'> Courses</a></li>
                <li><a class="text-muted text-decoration-none" href='/community'> Communities</a></li>
                <li><a class="text-muted text-decoration-none" href='/blog'> Blogs</a></li>
                </ul>
            </div>

            <div className="col-md-3 mb-md-0 mb-3">
            <h5 className="text-uppercase">Who We Are</h5>
                   <ul className="list-unstyled">
                   <li>  <Link class="text-muted text-decoration-none" to='/about'> About Us</Link></li>
                   <li>  <Link class="text-muted text-decoration-none" to='/contact'> Contact Us</Link></li>
                    <li>  <a class="text-muted text-decoration-none" href='/contact'> Privacy Policy</a></li>
                    <li><a class="text-muted text-decoration-none" href='/contact'> Terms and Condition</a></li>
                    </ul>
                    <h5 className="text-uppercase">Follow Us</h5>
                          <div className='footer-icons'>
                         <a class="text-muted w-auto p-3" target="_blank" href="www.facebook.com"><FaFacebook className='social' /></a>
                         <a class="text-muted w-auto p-3" target="_blank" href="www.linkedin.com"><FaLinkedin className='social' /></a>
                         <a class="text-muted w-auto p-3" target="_blank" href="www.twitter.com"><FaTwitter className='social' /></a>
                         <a class="text-muted w-auto p-3" target="_blank" href="www.instagram.com"><FaInstagram className='social' /></a>
      </div>

                
            </div>
        </div>
    </div>

    <div className="footer-copyright text-center py-3"><p>© 2023 Rumoney | All Rights Reserved</p>
    </div>

</footer>

export default Footer;
