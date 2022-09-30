import React from 'react';
import Avatar from '../Avatar';
const Ad = () => {
  const head = () => (
    <React.Fragment>
      <link rel="stylesheet" href="/static/css/home.css" />
    </React.Fragment>
  );

  return (
    <div className="ad">
      {head()}
      <div className="ad-p">
        <h1>
          <span id="content1">קורסים אונליין</span> לבגרויות, מכינות קדם אקדמיות
          ותואר ראשון
        </h1>
        <h3>
          לימודים באינטרנט לתלמידי בית ספר, משלימי ומשפרי בגרויות וחיילים
          משוחררים בכל רמת לימוד במתמטיקה ופיסיקה
        </h3>
        <h3>
          לימודי מכינות קדם אקדמיות לקראת שיפור תנאי קבלה לתואר ראשון
          לאוניברסיטאות ומכללות וקורסי ליבה ללומדים במוסדות השכלה גבוהה.
        </h3>
        <div className="ad-have-question">
          <a href="/">יש לי שאלה!</a>
        </div>
        <div className="ad-count-user">
          <div className="ad-user-avater">
            <span className="avatar-1">
              <Avatar userImg="/static/images/users/nir1.jpg" />
            </span>

            <span className="avatar-2">
              <Avatar
                userImg="/static/images/users/nir2.jpg
            "
              />
            </span>
            <span className="avatar-3">
              <Avatar userImg="/static/images/users/nir3.jpg" />
            </span>
          </div>
          <h4>45k+ משתמשים קבועים</h4>
        </div>
      </div>
      <div className="ad-img">
        <img
          src="/static/images/home/stu2.png"
          alt="some woman"
          className="purpale"
        />
        <img src="/static/images/home/stu1.png" alt="some woman" />
      </div>
    </div>
  );
};

export default Ad;
