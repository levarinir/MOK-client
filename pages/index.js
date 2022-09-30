import React from 'react';
import Layout from '../components/Layout';
import Ad from '../components/home/Ad';
function HomePage() {
  const head = () => (
    <React.Fragment>
      <title>Mok - בגרויות, מכינות אקדמיה</title>
      <link rel="stylesheet" href="/static/css/home.css" />
    </React.Fragment>
  );

  return (
    <Layout>
      {head()}
      <div className="login" dir="rtl">
        <Ad />
        {/* <div className="divv"></div> */}
        <h1>Home page</h1>
      </div>
    </Layout>
  );
}

export default HomePage;

//login
//home
//create course
//display course
//user dashboard
//admin
