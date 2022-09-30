import React, { useState, useEffect } from 'react';
import jwt from 'jsonwebtoken';
import axios from 'axios';
import { API } from '../../../config';
import { withRouter } from 'next/router';
import Layout from '../../../components/Layout';
import Msg from '../../../components/Msg';
import Router from 'next/router';
import { authenticate, isAuth } from '../../../helpers/auth';

const ActivateAccount = ({ router }) => {
  const [state, setState] = useState({
    name: '',
    token: '',
    buttonText: 'להפעלת החשבון',
    success: '',
    error: '',
  });
  const { name, token, buttonText, success, error } = state;

  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    let token = router.query.id;
    if (token) {
      const { name } = jwt.decode(token);
      setState({ ...state, name, token });
    }
  }, [router]);

  const clickSubmit = async (e) => {
    e.preventDefault();
    // console.log('activate acccount');
    setState({ ...state, buttonText: 'מופעל...' });

    try {
      const response = await axios.post(`${API}/auth/register/activate`, {
        token,
      });
      console.log('account activate response', response);
      authenticate(response, () =>
        isAuth() && !isAuth().role ? Router.push('/') : Router.push('/')
      );
    } catch (error) {
      setState({
        ...state,
        buttonText: 'להפעלת החשבון',
        error: error.response.data.error,
      });
      setOpenModal(true);
    }
  };
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
      <title>אימות דואר אלקטרוני</title>
      <link rel="stylesheet" href="/static/css/login.css" />
    </React.Fragment>
  );

  const handleClose = () => {
    setOpenModal(!openModal);
    success && Router.push('/');
    error && Router.push('/register');
  };

  return (
    <Layout>
      {head()}
      <div className="login" dir="rtl">
        <div className="auth-form">
          <div className="auth-form-title">
            <h1>אימות חשבון MOK</h1>
            <div className="activate-auth">
              <h2>שלום {name},</h2>
              <h3>להפעלת החשבון לחץ על הכפתור</h3>
              <button className="btn-active-auth" onClick={clickSubmit}>
                {buttonText}
              </button>
            </div>
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

export default withRouter(ActivateAccount);
