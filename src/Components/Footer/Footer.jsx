import React from 'react'
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faFacebookF,
  faInstagram,
  faTwitter,
  faYoutube,
  
} from '@fortawesome/free-brands-svg-icons'


const Footer = () => {
  return (
    <div className="footer-outer">
      <div className="footer-container">

        <div className="social-icons">
          <a href="#"><FontAwesomeIcon icon={faFacebookF} /></a>
          <a href="#"><FontAwesomeIcon icon={faInstagram} /></a>
          <a href="#"><FontAwesomeIcon icon={faTwitter} /></a>
          <a href="#"><FontAwesomeIcon icon={faYoutube} /></a>
        </div>
        
        <div className="footer-links">
          <ul>
            <li><a href="#">Audio Description</a></li>
            <li><a href="#">Investor Relations</a></li>
           <li><a href="#">Legal Notices</a></li>
            
          </ul>
          <ul>
            <li><a href="#">Help Centre</a></li>
            <li><a href="#">Jobs</a></li>
            <li><a href="#">Cookie Preferences</a></li>
            
          </ul>
          <ul>
            <li><a href="#">Gift Cards</a></li>
            <li><a href="#">Terms of Use</a></li>
             <li><a href="#">Corporate Information</a></li>
            
          </ul>
          <ul>
            <li><a href="#">Media Centre</a></li>
            <li><a href="#">Privacy</a></li>
            <li><a href="#">Contact Us</a></li>
          </ul>
        </div>

        <div className="footer-lang">
          <button className="lang-button">
            🌐 English ▾
          </button>
        </div>

      <p className="footer-note">
       &copy;1997–2025 Netflix, Inc.
      </p>

      </div>
    </div>
  )
}

export default Footer
