import React from 'react';
import CreatePost from '../components/CreatePost';
import Feed from '../components/Feed';
import InfoSection from '../components/InfoSection';
import News from '../components/News';
import { useSelector } from 'react-redux';
import './HomeScreen.css';

const HomeScreen = () => {
  const createPost = useSelector((state) => state.createPost.create);
  console.log(createPost);
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
