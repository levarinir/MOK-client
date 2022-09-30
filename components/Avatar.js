import React from 'react';

const Avatar = ({ userImg }) => {
  const head = () => (
    <React.Fragment>
      <link rel="stylesheet" href="/static/css/avatar.css" />
    </React.Fragment>
  );

  return (
    <div className="user-avatar">
      {head()}
      <img src={userImg} alt="user avatar" />
    </div>
  );
};

export default Avatar;
