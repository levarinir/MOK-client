import React from 'react';
import { useState, useEffect } from 'react';
import Layout from '../components/Layout';
import Msg from '../components/Msg';
import Link from 'next/link';
import Router from 'next/router';
import axios from 'axios';
import { API } from '../config';
import { authenticate, isAuth } from '../helpers/auth';
const Register = () => {
  const [state, setState] = useState({
    email: '',
    password: '',
    password2: '',
    phone: '',
    name: '',
    newsletter: false,
    error: true,
    success: '',
    buttonText: 'הרשמה',
  });
  const [validName, setValidName] = useState('');
  const [validPhone, setValidPhone] = useState('');
  const [validEmail, setValidEmail] = useState('');
  const [validPass, setValidPass] = useState('');
  const [validReturnPass, setValidReturnPass] = useState('');
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    isAuth() && Router.push('/');
  }, []);

  const {
    email,
    password,
    name,
    phone,
    password2,
    error,
    success,
    buttonText,
    newsletter,
  } = state;

  const head = () => (
    <React.Fragment>
      <title>הרשמה</title>
      <link rel="stylesheet" href="/static/css/login.css" />
    </React.Fragment>
  );

  const handleChange = (name) => (e) => {
    const flagError = false;
    if (name === 'name') {
      if (e.target.value.length < 2) {
        setValidName('שם לא תקין');
        flagError = true;
      } else {
        setValidName('');
        flagError = false;
      }
    }
    if (name === 'phone') {
      if (e.target.value.length !== 10) {
        setValidPhone('טלפון נייד אינו תקין');
        flagError = true;
      } else {
        setValidPhone('');
        flagError = false;
      }
    }
    if (name === 'email') {
      if (!validateEmail(e.target.value)) {
        setValidEmail('כתובת דוא״ל לא תקינה');
        flagError = true;
      } else {
        setValidEmail('');
        flagError = false;
      }
    }
    if (name === 'password') {
      if (e.target.value.length < 6) {
        setValidPass('הסיסמה חייבת להכיל לפחות 6 תווים');
        flagError = true;
      } else {
        setValidPass('');
        flagError = false;
      }
    }

    if (name === 'password2') {
      if (e.target.value !== password) {
        setValidReturnPass('הסיסמאות אינם זהות');
        flagError = true;
      } else {
        setValidReturnPass('');
        flagError = false;
      }
    }
    const flagNotEmpty = false;
    if (name && phone && email && password && password2) {
      flagNotEmpty = true;
    }
    setState({
      ...state,
      [name]: e.target.value,
      error: flagNotEmpty ? flagError : true,
      success: '',
      buttonText: 'הרשמה',
    });
  };

  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setState({ ...state, buttonText: 'הרשמה...' });
    try {
      const response = await axios.post(`${API}/auth/register`, {
        name,
        email,
        password,
        phone,
        newsletter,
      });
      console.log(response);
      //   authenticate(response, () =>
      //     isAuth() && isAuth().role === 'admin'
      //       ? Router.push('/admin')
      //       : Router.push('/user')
      //   );
      setState({
        ...state,
        success: response.data.message,
      });
      setOpenModal(true);
    } catch (error) {
      console.log('err:', error);
      setState({
        ...state,
        buttonText: 'הרשמה',
        error: error.response.data.err,
      });
      setOpenModal(true);
    }
  };

  const handleNewsletter = (checked) => {
    setState({
      ...state,
      ['newsletter']: checked,
    });
  };

  const handleClose = () => {
    setOpenModal(!openModal);
    Router.push('/');
  };

  const loginForm = () => (
    <form onSubmit={handleSubmit} className="form-input">
      <div className="form-group">
        <input
          value={name}
          onChange={handleChange('name')}
          type="text"
          className="form-control"
          placeholder="שם מלא"
          required
        />
        {validName && <p className="input-error">{validName}</p>}
      </div>
      <div className="form-group">
        <input
          value={phone}
          onChange={handleChange('phone')}
          type="text"
          className="form-control"
          placeholder="טלפון נייד"
          required
        />
        {validPhone && <p className="input-error">{validPhone}</p>}
      </div>
      <div className="form-group">
        <input
          value={email}
          onChange={handleChange('email')}
          type="email"
          className="form-control"
          placeholder="דואר אלקטרוני"
          required
        />
        {validEmail && <p className="input-error">{validEmail}</p>}
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
        {validPass && <p className="input-error">{validPass}</p>}
      </div>
      <div className="form-group">
        <input
          value={password2}
          onChange={handleChange('password2')}
          type="password"
          className="form-control"
          placeholder="סיסמה חוזרת"
          required
        />
        {validReturnPass && <p className="input-error">{validReturnPass}</p>}
      </div>
      <div className="form-group">
        <button className="form-btn" disabled={error}>
          {buttonText}
        </button>
      </div>
      <div className="ad-email">
        <input
          type="checkbox"
          className="ad-email-check"
          onChange={(e) => handleNewsletter(e.target.checked)}
        />
        <p>אשמח לקבל עדכונים במייל לגבי חידושים באתר</p>
      </div>
      <div className="auth-redirect">
        <p>כבר יש לך חשבון?</p>
        <Link href="/login">
          <a className="auth-redirect-text">התחברות</a>
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
          <div className="auth-form-title">
            <h1>צרו חשבון MOK</h1>
          </div>
          <div className="auth-form-input">{loginForm()}</div>
        </div>
        {leftSideBack()}
      </div>
      {openModal ? (
        success ? (
          <Msg msg={success} handleClose={handleClose} />
        ) : error ? (
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

export default Register;
