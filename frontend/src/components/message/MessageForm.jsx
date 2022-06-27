import classes from './MessageForm.module.css';
import { useState } from 'react';
import { useSelector } from 'react-redux';

const MessageForm = () => {
  const { user } = useSelector((state) => state.auth);
  const [message, setMessage] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(message, user);
  };

  return (
    <>
      <form className={classes['form']} onSubmit={onSubmit}>
        <textarea
          placeholder='Your Message'
          id='message'
          className={classes['message-input']}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />

        <div className={classes['button-container']}>
          <button className={classes['submit-button']}>Login</button>
        </div>
      </form>
    </>
  );
};

export default MessageForm;
