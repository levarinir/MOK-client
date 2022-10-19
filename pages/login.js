import React from 'react';
import { useState, useEffect } from 'react';
import Layout from '../components/Layout';
import Link from 'next/link';
import Router from 'next/router';
import axios from 'axios';
import { API } from '../config';
import { authenticate, isAuth } from '../helpers/auth';
import Msg from '../components/Msg';

const Login = () => {
  const [state, setState] = useState({
    email: '',
    password: '',
    error: '',
    success: '',
    buttonText: 'התחברות',
  });

  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    isAuth() && Router.push('/');
  }, []);

  const { email, password, error, success, buttonText } = state;

  const head = () => (
    <React.Fragment>
      <title>התחברות</title>
      <link rel="stylesheet" href="/static/css/login.css" />
    </React.Fragment>
  );

  const handleChange = (name) => (e) => {
    setState({
      ...state,
      [name]: e.target.value,
      error: '',
      success: '',
      buttonText: 'התחברות',
    });
  };

  const handleClose = () => {
    setOpenModal(!openModal);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setState({ ...state, buttonText: 'מתחבר...' });
    try {
      const response = await axios.post(`${API}/auth/login`, {
        email,
        password,
      });
      authenticate(response, () =>
        isAuth() && !isAuth().role ? Router.push('/') : Router.push('/')
      );
    } catch (error) {
      console.log(error);
      setState({
        ...state,
        buttonText: 'התחברות',
        error: error.response.data.err,
      });
      setOpenModal(true);
    }
  };

  const loginForm = () => (
    <form onSubmit={handleSubmit} className="form-input">
      <div className="form-group">
        <input
          value={email}
          onChange={handleChange('email')}
          type="email"
          className="form-control"
          placeholder="מייל"
          required
        />
      </div>
      <div className="form-group">
        <input
          value={password}
          onChange={handleChange('password')}
          type="password"
          className="form-control"
          placeholder="סיסמה"
          required
        />
      </div>

      <div className="form-group">
        <button className="form-btn">{buttonText}</button>
      </div>
      <div>
        <Link href="/auth/password/forgot">
          <a className="login-forgot-pass">שכחתי סיסמה</a>
        </Link>
      </div>
    </form>
  );

  const leftSideBack = () => (
    <div className="auth-background">
      {/* <img
        src="/static/images/auth/authbackground.svg"
        alt="auth background"
        className="auth-background-image"
      /> */}
      <img
        src="/static/images/auth/Ellipse7.png"
        alt="auth background"
        className="auth-background-elipse1"
      />
      <img
        src="/static/images/auth/Ellipse2.svg"
        alt="auth background"
        className="auth-background-elipse2"
      />
      <img
        src="/static/images/auth/Ellipse3.svg"
        alt="auth background"
        className="auth-background-elipse3"
      />
      <img
        src="/static/images/auth/Ellipse4.svg"
        alt="auth background"
        className="auth-background-elipse4"
      />
      <img
        src="/static/images/auth/Ellipse5.svg"
        alt="auth background"
        className="auth-background-elipse5"
      />
      <img
        src="/static/images/auth/Ellipse6.svg"
        alt="auth background"
        className="auth-background-elipse6"
      />
    </div>
  );

  return (
    <Layout>
      {head()}
      <div className="login" dir="rtl">
        <div className="auth-form">
          <div className="auth-form-title login-title">
            <h1>ברוכים השבים</h1>
          </div>
          <div className="auth-form-input">{loginForm()}</div>
        </div>
        {leftSideBack()}
      </div>
      {openModal ? (
        error ? (
          <Msg msg={error} handleClose={handleClose} />
        ) : (
          ''
        )
      ) : (
        ''
      )}
    </Layout>
  );
};

export default Login;

/*

<h1>Login</h1>
        <br />
        {success && showSuccessMessage(success)}
        {error && showErrorMessage(error)}
        {loginForm()}
        <Link href="/auth/password/forgot">
          <a className="text-danger float-right">Forgot Password</a>
        </Link>

        */
