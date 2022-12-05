import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import './Sidebar.css';

export default props => {
  return (
    <Menu>
      <a className="menu-item" href="/">
        Home
      </a>
      <a className="menu-item" href="/salads">
        About
      </a>
      <a className="menu-item" href="/pizzas">
        Contact
      </a>
      <a className="menu-item" href="/desserts">
        SignIn/SignUp
      </a>
    </Menu>
  );
};