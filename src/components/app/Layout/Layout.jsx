import React from 'react';
import SideNav from '../SideNav/SideNav';
import './Layout.css'; 

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <SideNav />
      <div className="main_content">
        {children}
      </div>
    </div>
  );
};

export default Layout;