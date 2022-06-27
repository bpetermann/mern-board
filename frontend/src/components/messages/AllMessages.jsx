import classes from './AllMessages.module.css';
import { useEffect } from 'react';
import MessageItem from './MessageItem';
import { useSelector, useDispatch } from 'react-redux';
import { getAllMessages, reset } from '../../features/messages/messageSlice';
import Spinner from '../layout/Spinner';

const AllMessages = () => {
  const { allMessages, isLoading, isSuccess } = useSelector(
    (state) => state.message
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllMessages());

    return () => {
      if (isSuccess) {
        dispatch(reset());
      }
    };
  }, [dispatch, isSuccess]);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <ul className={classes['container']}>
      {allMessages.map((message) => (
        <MessageItem
          key={message._id}
          author={message.email}
          content={message.messagePost}
        />
      ))}
    </ul>
  );
};

export default AllMessages;
