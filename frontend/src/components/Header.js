import React from 'react';
import { HashLink } from 'react-router-hash-link';
import './Header.css';
import logo from './snapchat.png';

const Header = () => {
  return (
    <nav className='header'>
      <div className='header__logo'>
        <img className='header__image' src={logo} alt='' />
      </div>

      <div className='header__right'>
        <HashLink to='#ourMission'>Our Mission</HashLink>
        <HashLink to='#reviews'>Reviews</HashLink>
      </div>
    </nav>
  );
};

export default Header;
