import classes from './MessageItem.module.css';

import React from 'react';

const SingleMessage = ({ author, content }) => {
  return (
    <li className={classes['post']}>
      <div className={classes['author-email']}>
        <p>{author}</p>
      </div>
      <div>
        <h2>{content}</h2>
      </div>
    </li>
  );
};

export default SingleMessage;
