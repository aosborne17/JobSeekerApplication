import { Avatar } from '@material-ui/core';
import React from 'react';
import './Post.css';

const Post = ({ name, description, message, photoUrl }) => {
  return (
    <div className='post'>
      <div className='post__header'>
        <Avatar className='post__avatar' src={photoUrl} />
        <div className='post__userInfo'>
          <h2>{name}</h2>
          <p>{description}</p>
        </div>
      </div>
      <div className='post__body'>
        <p>{message}</p>
      </div>
    </div>
  );
};

export default Post;
