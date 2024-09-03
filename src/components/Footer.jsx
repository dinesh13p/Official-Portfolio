import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faGithub } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="footer" id="more">
      <div className="footer-content">
        <p className="footer-text">©2024 All rights reserved.</p>
        <br />
        <div className="footer-socials">
          <a href="https://www.instagram.com/_d_nesh_/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} /> Instagram
          </a>
          <a href="https://www.facebook.com/dinesh.poudel.319452" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faFacebook} /> Facebook
          </a>
          <a href="https://github.com/dinesh13p" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} /> GitHub
          </a>
        </div>
      </div>
    </footer>
  );
  
}
export default Footer;
