import React from 'react';
import './Feed.css';
import InputFeed from './InputFeed';
import Post from './Post';

const Feed = () => {
  return (
    <div className='feed'>
      <InputFeed />
      <Post
        name='Andrew'
        description='Software Developer at Transmedia Storyteller'
        message='My new article on how I learnt to code'
        photoUrl='https://media-exp1.licdn.com/dms/image/C5603AQGv877kAllGJA/profile-displayphoto-shrink_100_100/0/1598308310113?e=1618444800&v=beta&t=dXGAdqk67iAQsfP2BaWeXiUdDazsTu2fM6GVcPG9LkM'
      />
      <Post
        name='Andrew'
        description='Software Developer at Transmedia Storyteller'
        message='My new article on how I learnt to code'
        photoUrl='https://media-exp1.licdn.com/dms/image/C5603AQGv877kAllGJA/profile-displayphoto-shrink_100_100/0/1598308310113?e=1618444800&v=beta&t=dXGAdqk67iAQsfP2BaWeXiUdDazsTu2fM6GVcPG9LkM'
      />
    </div>
  );
};

export default Feed;
