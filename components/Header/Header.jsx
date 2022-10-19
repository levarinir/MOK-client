import React from 'react';
import Link from 'next/link';
import Initials from '../Initials';
import Menu from '../Menu';

const Header = ({ user }) => {
  return (
    <div className="header">
      <div className="header-container">
        <Link href="/">
          <img
            src="/static/images/header/mok-logo.png"
            alt="Mok Logo"
            className="header-logo"
          />
        </Link>
        <div className="header-top-nav">
          <ul>
            <li>
              <Link href="/">ראשי</Link>
            </li>
            <li>
              <Link href="/">תרוויחו כסף ב- MOK</Link>
            </li>
            <li>
              <Link href="/">קביעת שיעור פרטי</Link>
            </li>
          </ul>
        </div>
      </div>

      {!user && (
        <div className="header-user">
          <img
            src="/static/images/header/Heart.svg"
            alt="user "
            className="header-heart-img"
          />
          <img
            src="/static/images/header/Buy.svg"
            alt="Mok Logo"
            className="header-cart-img"
          />
          <ul className="header-auth-btn">
            <li className="header-auth-btn-register">
              <a href="/register">הרשמה</a>
            </li>
            <li className="header-auth-btn-login">
              <a href="/login">התחברות</a>
            </li>
          </ul>
        </div>
      )}
      {user && (
        <div className="header-user">
          <div className="dropbtn">
            <Initials name={user.name} />
          </div>
          <div className="dropdown">
            <h1>Nir</h1>
            <Menu user={user} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
