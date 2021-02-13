import React from 'react';
import './InputFeed.css';
import CreateIcon from '@material-ui/icons/Create';
import FeedInputOption from './FeedInputOption';
import ImageIcon from '@material-ui/icons/Image';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import EventNoteIcon from '@material-ui/icons/EventNote';
import CalendarViewDayIcon from '@material-ui/icons/CalendarViewDay';

const InputFeed = () => {
  return (
    <div className='inputFeed'>
      <div className='inputFeed__formContainer'>
        <CreateIcon />
        <form>
          <input type='text' />
          <button type='submit'>Send</button>
        </form>
      </div>
      <div className='inputFeed__options'>
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
