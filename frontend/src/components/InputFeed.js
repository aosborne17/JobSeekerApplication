import React from 'react';
import './InputFeed.css';
import { Avatar } from '@material-ui/core';
import FeedInputOption from './FeedInputOption';
import ImageIcon from '@material-ui/icons/Image';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import EventNoteIcon from '@material-ui/icons/EventNote';
import CalendarViewDayIcon from '@material-ui/icons/CalendarViewDay';
import { useDispatch } from 'react-redux';
import { createPost } from '../actions/postActions';

const InputFeed = () => {
  const dispatch = useDispatch();
  return (
    <div className='inputFeed'>
      <div className='inputFeed__Container'>
        <Avatar
          className='inputFeed__Avatar'
          onClick={() => alert('Routing to users page')}
          src='https://media-exp1.licdn.com/dms/image/C5603AQGv877kAllGJA/profile-displayphoto-shrink_100_100/0/1598308310113?e=1618444800&v=beta&t=dXGAdqk67iAQsfP2BaWeXiUdDazsTu2fM6GVcPG9LkM'
        />
        <button
          onClick={() => dispatch(createPost())}
          className='inputFeed__Button'
        >
          Start a Post
        </button>
      </div>
      <div className='inputFeed__Options'>
        <FeedInputOption Icon={ImageIcon} title='Photo' color='blue' />
        <FeedInputOption Icon={SubscriptionsIcon} title='Video' color='green' />
        <FeedInputOption Icon={EventNoteIcon} title='Event' color='yellow' />
        <FeedInputOption
          Icon={CalendarViewDayIcon}
          title='Write Article'
          color='red'
        />
      </div>
    </div>
  );
};

export default InputFeed;
