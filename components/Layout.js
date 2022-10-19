import Head from 'next/head';
import Link from 'next/link';
import Router from 'next/router';
import { isAuth, logout } from '../helpers/auth';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import React, { useEffect, useState } from 'react';
import { Footer } from '@/components/Footer';
import Header from '@/components/Header/Header';

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

  const nav = () => (
    <ul className="header-nav">
      <li className="nav-item">
        <Link href="/">
          <a className="nav-link-text">
            בגרויות במתמטיקה{' '}
            <img src="/static/images/header/Down2.png" alt="open bagrut menu" />
          </a>
        </Link>
      </li>

      <li className="nav-item">
        <Link href="/user/link/create">
          <a className="nav-link-text" style={{ borderRadius: '0px' }}>
            מכינות{' '}
            <img src="/static/images/header/Down2.png" alt="open bagrut menu" />
          </a>
        </Link>
      </li>

      <li className="nav-item">
        <Link href="/">
          <a className="nav-link-text">
            אקדמיה{' '}
            <img src="/static/images/header/Down2.png" alt="open bagrut menu" />
          </a>
        </Link>
      </li>
    </ul>
  );

  return (
    <React.Fragment>
      {head()}
      <Header user={user} />
      {nav()}
      <div>{children}</div>
      <Footer />
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
