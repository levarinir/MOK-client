import Head from 'next/head';
import Link from 'next/link';
import Router from 'next/router';
import { isAuth, logout } from '../helpers/auth';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import React, { useEffect, useState } from 'react';
import Initials from './Initials';
import Menu from './Menu';

Router.onRouteChangeStart = (url) => NProgress.start();
Router.onRouteChangeComplete = (url) => NProgress.done();
Router.onRouteChangeError = (url) => NProgress.done();

const Layout = ({ children }) => {
  const [user, setAuthUser] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setAuthUser(isAuth());
    }
  }, []);

  const head = () => (
    <React.Fragment>
      <link rel="stylesheet" href="/static/css/styles.css" />
    </React.Fragment>
  );

  const header = () => {
    return (
      <div className="header">
        <div className="header-container">
          <img
            src="/static/images/header/mok-logo.png"
            alt="Mok Logo"
            className="header-logo"
          />
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

  const nav = () => (
    <ul className="header-nav">
      <li className="nav-item">
        <Link href="/">
          <a className="nav-link-text">
            בגרויות במתמטיקה{' '}
            <img src="/static/images/header/Down.png" alt="open bagrut menu" />
          </a>
        </Link>
      </li>

      <li className="nav-item">
        <Link href="/user/link/create">
          <a className="nav-link-text" style={{ borderRadius: '0px' }}>
            מכינות{' '}
            <img src="/static/images/header/Down.png" alt="open bagrut menu" />
          </a>
        </Link>
      </li>

      <li className="nav-item">
        <Link href="/">
          <a className="nav-link-text">
            אקדמיה{' '}
            <img src="/static/images/header/Down.png" alt="open bagrut menu" />
          </a>
        </Link>
      </li>
    </ul>
  );

  const footer = () => <div className="footer">footer</div>;

  return (
    <React.Fragment>
      {head()}
      {header()} {nav()} <div>{children}</div>
      {footer()}
    </React.Fragment>
  );
};

export default Layout;

/*

{!isAuth() && (
        <React.Fragment>
          <li className="nav-item">
            <Link href="/login">
              <a className="nav-link text-dark">Login</a>
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/register">
              <a className="nav-link text-dark">Register</a>
              <img
                src="/static/images/header/Down.png"
                alt="open bagrut menu"
              />
            </Link>
          </li>
        </React.Fragment>
      )}

      {isAuth() && isAuth().role === 'admin' && (
        <li className="nav-item ml-auto">
          <Link href="/admin">
            <a className="nav-link text-dark">{isAuth().name}</a>
          </Link>
        </li>
      )}

      {isAuth() && isAuth().role === 'subscriber' && (
        <li className="nav-item ml-auto">
          <Link href="/user">
            <a className="nav-link text-dark">{isAuth().name}</a>
          </Link>
        </li>
      )}

      {isAuth() && (
        <li className="nav-item">
          <a onClick={logout} className="nav-link text-dark">
            Logout
          </a>
        </li>
      )}
      */
