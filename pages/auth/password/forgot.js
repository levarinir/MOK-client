import React, { useState } from 'react';
import axios from 'axios';
import { showSuccessMessage, showErrorMessage } from '../../../helpers/alerts';
import { API } from '../../../config';
import Router from 'next/router';
import Layout from '../../../components/Layout';
import Msg from '../../../components/Msg';

const ForgotPassword = () => {
  const [state, setState] = useState({
    email: '',
    buttonText: 'שכחתי סיסמה',
    success: '',
    error: '',
  });
  const { email, buttonText, success, error } = state;
  const [openModal, setOpenModal] = useState(false);

  const handleChange = (e) => {
    setState({ ...state, email: e.target.value, success: '', error: '' });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log('post email to ', email);
    try {
      const response = await axios.put(`${API}/auth/forgot-password`, {
        email,
      });
      // console.log('FORGOT PASSWORD', response);
      setState({
        ...state,
        email: '',
        buttonText: 'בוצע',
        success: response.data.message,
      });
      setOpenModal(true);
    } catch (error) {
      console.log('FORGOT PW ERROR', error);
      setState({
        ...state,
        buttonText: 'שכחתי סיסמה',
        error: error.response.data.error,
      });
      setOpenModal(true);
    }
  };

  const passwordForgotForm = () => (
    <form onSubmit={handleSubmit} className="form-input">
      <div className="form-group">
        <input
          value={email}
          onChange={handleChange}
          type="email"
          className="form-control"
          placeholder="דואר אלקטרוני"
          required
        />
      </div>

      <div className="form-group">
        <button className="form-btn">{buttonText}</button>
      </div>
    </form>
  );

  const leftSideBack = () => (
    <div className="auth-background">
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

  const head = () => (
    <React.Fragment>
      <title>שכחתי סיסמה</title>
      <link rel="stylesheet" href="/static/css/login.css" />
    </React.Fragment>
  );

  const handleClose = () => {
    setOpenModal(!openModal);
    success && Router.push('/');
  };
  return (
    <Layout>
      {head()}
      <div className="login" dir="rtl">
        <div className="auth-form">
          <div className="auth-form-title">
            <h1>איפוס סיסמה</h1>
            <div className="activate-auth">{passwordForgotForm()}</div>
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
        </div>
        {leftSideBack()}
      </div>
    </Layout>
  );
};

export default ForgotPassword;

/*
<Layout>
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <h1>Forgot Password</h1>
          <br />
          {success && showSuccessMessage(success)}
          {error && showErrorMessage(error)}
          {passwordForgotForm()}
        </div>
      </div>
    </Layout>
    */
