import React from 'react';
import Feed from '../components/Feed';
import InfoSection from '../components/InfoSection';
import News from '../components/News';
import './HomeScreen.css';

const HomeScreen = () => {
  return (
    <div className='homeScreen'>
      <InfoSection />
      <Feed />
      <News />
    </div>
  );
};

export default HomeScreen;
