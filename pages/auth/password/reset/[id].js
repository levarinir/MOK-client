import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  showSuccessMessage,
  showErrorMessage,
} from '../../../../helpers/alerts';
import { API } from '../../../../config';
import Router, { withRouter } from 'next/router';
import jwt from 'jsonwebtoken';
import Layout from '../../../../components/Layout';
import Msg from '../../../../components/Msg';

const ResetPassword = ({ router }) => {
  const [state, setState] = useState({
    name: '',
    token: '',
    newPassword: '',
    newPassword2: '',
    buttonText: 'אפס סיסמה',
    success: '',
    error: true,
  });
  const { name, token, newPassword, newPassword2, buttonText, success, error } =
    state;

  const [openModal, setOpenModal] = useState(false);
  const [validPass, setValidPass] = useState('');
  const [validReturnPass, setValidReturnPass] = useState('');

  useEffect(() => {
    console.log(router);
    const decoded = jwt.decode(router.query.id);
    if (decoded)
      setState({ ...state, name: decoded.name, token: router.query.id });
  }, [router]);

  const handleChange = (name) => (e) => {
    const flagError = false;

    if (name === 'newPassword') {
      if (e.target.value.length < 6) {
        setValidPass('הסיסמה חייבת להכיל לפחות 6 תווים');
        flagError = true;
      } else {
        setValidPass('');
        flagError = false;
      }
    }

    if (name === 'newPassword2') {
      if (e.target.value !== newPassword) {
        setValidReturnPass('הסיסמאות אינם זהות');
        flagError = true;
      } else {
        setValidReturnPass('');
        flagError = false;
      }
    }
    const flagNotEmpty = false;
    if (newPassword && newPassword2) {
      flagNotEmpty = true;
    }

    setState({
      ...state,
      [name]: e.target.value,
      success: '',
      error: flagNotEmpty ? flagError : true,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log('post email to ', email);
    setState({ ...state, buttonText: 'מעדכן...' });
    try {
      const response = await axios.put(`${API}/auth/reset-password`, {
        resetPasswordLink: token,
        newPassword,
      });
      // console.log('FORGOT PASSWORD', response);
      setState({
        ...state,
        newPassword: '',
        buttonText: 'הסיסמאות עודכנו',
        success: response.data.message,
      });
      setOpenModal(true);
    } catch (error) {
      console.log('RESET PW ERROR', error);
      setState({
        ...state,
        buttonText: 'שכחתי סיסמה',
        error: error.response.data.error,
      });
      setOpenModal(true);
    }
  };

  const passwordResetForm = () => (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <input
          value={newPassword}
          onChange={handleChange('newPassword')}
          type="password"
          className="form-control"
          placeholder="סיסמה"
          required
        />
        {validPass && <p className="input-error">{validPass}</p>}
      </div>
      <div className="form-group">
        <input
          value={newPassword2}
          onChange={handleChange('newPassword2')}
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
    success && Router.push('/login');
    error && Router.push('/auth/password/forgot');
  };
  return (
    <Layout>
      {head()}
      <div className="login" dir="rtl">
        <div className="auth-form">
          <div className="auth-form-title">
            <h1>איפוס סיסמה</h1>
            <div className="activate-auth">{passwordResetForm()}</div>
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

export default withRouter(ResetPassword);

/*
<Layout>
            <div className="row">
                <div className="col-md-6 offset-md-3">
                    <h1>Hi {name}, Ready to Reset Password?</h1>
                    <br />
                    {success && showSuccessMessage(success)}
                    {error && showErrorMessage(error)}
                    {passwordResetForm()}
                </div>
            </div>
        </Layout>
        */
