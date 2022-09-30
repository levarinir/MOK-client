import React from 'react';

const Msg = ({ msg, handleClose }) => {
  const head = () => (
    <React.Fragment>
      <link rel="stylesheet" href="/static/css/msg.css" />
    </React.Fragment>
  );

  const closeModal = () => {
    console.log('close!');
    handleClose();
  };
  return (
    <div className="msg-container">
      {head()}
      {console.log('popup')}
      <div className="msg-content">
        <span className="close-msg" onClick={closeModal}>
          x
        </span>
        {msg}
      </div>
    </div>
  );
};

export default Msg;
