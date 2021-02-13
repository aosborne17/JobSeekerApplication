import React from 'react';
import CreatePost from '../components/CreatePost';
import Feed from '../components/Feed';
import InfoSection from '../components/InfoSection';
import News from '../components/News';
import './HomeScreen.css';

const HomeScreen = () => {
  const createPost = false;
  return (
    <div className='homeScreen'>
      {createPost && <CreatePost />}
      <InfoSection />
      <Feed />
      <News />
    </div>
  );
};

export default HomeScreen;
