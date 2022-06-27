import classes from './MessageItem.module.css';
import { useSelector } from 'react-redux';

const SingleMessage = ({ author, content, id, deletePost }) => {
  const { user } = useSelector((state) => state.auth);

  return (
    <li className={classes['post']}>
      {user && (
        <div className={classes['delete-button']}>
          <button onClick={() => deletePost(id)}>
            <span>X</span>
          </button>
        </div>
      )}
      <div className={classes['author-email']}>
        <p>Author: {author}</p>
      </div>
      <div>
        <h2>{content}</h2>
      </div>
    </li>
  );
};

export default SingleMessage;
