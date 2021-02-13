import React from 'react';
import './Sidebar.css';
import SidebarItem from './SidebarItem';

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <img src='' alt='' />
      <h5>Andrew</h5>

      <SidebarItem name={'Home'} icon={} />
      <SidebarItem name={'Messages'} />
      <SidebarItem name={'Learn'} />
      <SidebarItem name={'Quiz'} />
      <SidebarItem name={'Settings'} />
    </div>
  );
};

export default Sidebar;
