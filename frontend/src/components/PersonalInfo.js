import { Avatar } from '@material-ui/core';
import React from 'react';
import './PersonalInfo.css';

const PersonalInfo = () => {
  return (
    <div className='personalInfo'>
      <img src='' alt='' />
      <Avatar
        className='personalInfo__avatar'
        src='https://media-exp1.licdn.com/dms/image/C5603AQGv877kAllGJA/profile-displayphoto-shrink_100_100/0/1598308310113?e=1618444800&v=beta&t=dXGAdqk67iAQsfP2BaWeXiUdDazsTu2fM6GVcPG9LkM'
      />
      <h2>Andrew</h2>
      <h4>aosborne99@outlook.com</h4>
    </div>
  );
};

export default PersonalInfo;
