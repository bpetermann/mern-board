import classes from './MessageForm.module.css';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { createMessage, reset } from '../../features/messages/messageSlice';
import Spinner from '../layout/Spinner';

const MessageForm = () => {
  // const { user } = useSelector((state) => state.auth);
  const [messagePost, setMessagePost] = useState('');
  const { isLoading, isError, isSuccess, alert } = useSelector(
    (state) => state.message
  );

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (isError) {
      toast.error(alert);
    }
    if (isSuccess) {
      dispatch(reset());
      navigate('/');
    }
    dispatch(reset());
  }, [dispatch, isError, isSuccess, navigate, alert]);

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(createMessage({ messagePost }));
  };

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <form className={classes['form']} onSubmit={onSubmit}>
      <textarea
        placeholder='Your Message'
        name='message'
        id='message'
        className={classes['message-input']}
        value={messagePost}
        onChange={(e) => setMessagePost(e.target.value)}
        required
      />
      <div className={classes['button-container']}>
        <button className={classes['submit-button']}>Add</button>
      </div>
    </form>
  );
};

export default MessageForm;
