import React from 'react';
import Initials from './Initials';
import { logout } from '../helpers/auth';
const Menu = ({ user }) => {
  const head = () => (
    <React.Fragment>
      <link rel="stylesheet" href="/static/css/menu.css" />
    </React.Fragment>
  );

  const userDetails = () => (
    <div className="user-menu-details">
      <Initials name={user.name} />
      <div className="user-private-details">
        <h2>{user.name}</h2>
        <h3>{user.email}</h3>
      </div>
    </div>
  );

  return (
    <div className="user-menu">
      <div className="user-menu-wrap">
        {head()}
        {userDetails()}
        <hr />
        <div className="user-menu-logout">
          <img
            src="/static/images/header/Logout.svg"
            className="user-menu-logout-img"
          />
          <a onClick={logout} className="user-menu-logout-a">
            התנתקות
          </a>
        </div>
      </div>
    </div>
  );
};

export default Menu;
