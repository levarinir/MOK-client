import React from 'react';

const Initials = ({ name }) => {
  const head = () => (
    <React.Fragment>
      <link rel="stylesheet" href="/static/css/initials.css" />
    </React.Fragment>
  );
  const initialsName = (name) => {
    const parts = name.split(' ');
    let initials = '';
    for (let i = 0; i < parts.length; i++) {
      if (parts[i].length > 0 && parts[i] !== '') {
        initials += parts[i][0];
      }
    }
    return initials;
  };

  return (
    <div className="nav-auth-user">
      {head()}
      {initialsName(name)}
    </div>
  );
};

export default Initials;
