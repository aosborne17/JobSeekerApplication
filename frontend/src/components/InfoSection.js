import React from 'react';
import ActivityInfo from './ActivityInfo';
import './InfoSection.css';
import PersonalInfo from './PersonalInfo';
import StatsInfo from './StatsInfo';

const InfoSection = () => {
  return (
    <div className='infoSection'>
      <div className='infoSection__bottom'>
        <PersonalInfo />
        <StatsInfo />
      </div>
      <ActivityInfo />
    </div>
  );
};

export default InfoSection;
