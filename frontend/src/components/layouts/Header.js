import React from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import ChatIcon from '@material-ui/icons/Chat';
// import NotificationsIcon from '@material-ui/icons/Notifications';
import InsertChartIcon from '@material-ui/icons/InsertChart';
import HeaderOption from './HeaderOption';

const Header = () => {
  return (
    <nav className='header'>
      <div className='header__left'>
        <img
          src='https://www.pngfind.com/pngs/m/154-1541132_beautiful-lotus-flower-png-beautiful-logo-download-transparent.png'
          alt=''
        />

        <div className='header__search'>
          <SearchIcon />
          <input type='text' />
        </div>
      </div>

      <div className='header__right'>
        <HeaderOption Icon={HomeIcon} title='Home' />
        <HeaderOption Icon={SupervisorAccountIcon} title='My Network' />
        <HeaderOption Icon={BusinessCenterIcon} title='Jobs' />
        <HeaderOption Icon={ChatIcon} title='Messaging' />
        {/* <HeaderOption Icon={NotificationsIcon} title='Notifications' /> */}
        <HeaderOption Icon={InsertChartIcon} title='Dashboard' />
        <HeaderOption
          avatar='https://media-exp1.licdn.com/dms/image/C5603AQGv877kAllGJA/profile-displayphoto-shrink_100_100/0/1598308310113?e=1618444800&v=beta&t=dXGAdqk67iAQsfP2BaWeXiUdDazsTu2fM6GVcPG9LkM'
          title='Me'
        />
      </div>
    </nav>
  );
};

export default Header;
