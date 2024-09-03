import React, { useState } from 'react';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faInfoCircle, faBriefcase, faCogs, faEnvelope, faBars, faGlobe } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header>

      <div className="logo">WhatsUp!</div>
      <div className="hamburger" onClick={toggleMenu}>
        <FontAwesomeIcon icon={faBars} />
      </div>

      <div className='navbar'>
        <nav>
          <ul className={isOpen ? 'open' : ''}>
            <li>
              <a href="#home"><FontAwesomeIcon icon={faHome} /> Home</a>
            </li>
            <li>
              <a href="#service"><FontAwesomeIcon icon={faCogs} /> Service</a>
            </li>
            <li>
              <a href="#about"><FontAwesomeIcon icon={faInfoCircle} /> About</a>
            </li>
            <li>
              <a href="#portfolio"><FontAwesomeIcon icon={faBriefcase} /> Portfolio</a>
            </li>

            <li>
              <a href="#contact"><FontAwesomeIcon icon={faEnvelope} /> Contact</a>
            </li>
            <li>
              <a href="#more"><FontAwesomeIcon icon={faGlobe} /> More</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
