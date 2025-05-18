import React from 'react';
import Sidebar from '../sideBar/sidebar';
import './layout.css';

function Layout({ children }) {
  return (
    <div className="layout">
      <Sidebar />
      <main className="layout-main-content">{children}</main>
    </div>
  );
}

export default Layout;
