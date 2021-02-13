import React from 'react';
import './StatsInfo.css';

const StatsInfo = () => {
  return (
    <div className='statsInfo'>
      <div className='statsInfo_stat'>
        <p>Who viewed you</p>
        <p>2,556</p>
      </div>
      <div className='statsInfo_stat'>
        <p>Views on post</p>
        <p>2,556</p>
      </div>
    </div>
  );
};

export default StatsInfo;
