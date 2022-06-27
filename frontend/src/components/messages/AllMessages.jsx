import classes from './AllMessages.module.css';
import { useEffect } from 'react';
import MessageItem from './MessageItem';
import { useSelector, useDispatch } from 'react-redux';
import {
  getAllMessages,
  deleteMessage,
  reset,
} from '../../features/messages/messageSlice';
import { toast } from 'react-toastify';
import Spinner from '../layout/Spinner';

const AllMessages = () => {
  const { allMessages, isLoading, isError, message } = useSelector(
    (state) => state.message
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllMessages());

    if (isError) {
      toast.error(message);
    }

    if (message === 'Message deleted') {
      window.location.reload(false);
    }

    dispatch(reset());

    return () => {
      dispatch(reset());
    };
  }, [dispatch, isError, message]);

  if (isLoading) {
    return <Spinner />;
  }

  const deletePost = (id) => {
    dispatch(deleteMessage(id));
  };

  return (
    <ul className={classes['container']}>
      {allMessages.map((message) => (
        <MessageItem
          key={message._id}
          message={message}
          id={message._id}
          author={message.email}
          authorId={message.user}
          content={message.messagePost}
          deletePost={deletePost}
        />
      ))}
    </ul>
  );
};

export default AllMessages;
