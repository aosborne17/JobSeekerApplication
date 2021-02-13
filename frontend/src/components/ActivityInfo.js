import React from 'react';
import './ActivityInfo.css';

const ActivityInfo = () => {
  const renderRecentItems = (topic) => (
    <div className='activityInfo_recentItem'>
      <span className='recentItem__hash'>#</span>
      <p className='recentItem__topic'>{topic}</p>
    </div>
  );

  renderRecentItems();
  return (
    <div className='activityInfo'>
      <h3>Recent Activity</h3>
      {renderRecentItems('Javascript')}
      {renderRecentItems('Serverless')}
      {renderRecentItems('Cloud')}
      {renderRecentItems('Startups')}
    </div>
  );
};

export default ActivityInfo;
