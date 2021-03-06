import classes from './MessageItem.module.css';
import { useSelector } from 'react-redux';

const SingleMessage = ({ author, content, id, deletePost, authorId }) => {
  const { user } = useSelector((state) => state.auth);

  const currentUserPost = user != null && user._id === authorId ? true : false;

  const showAuthor = user ? author : 'Anonymous';

  return (
    <li className={classes['post']}>
      {currentUserPost && (
        <div className={classes['delete-button']}>
          <button onClick={() => deletePost(id)}>
            <span>X</span>
          </button>
        </div>
      )}
      <div className={classes['author-email']}>
        <p>Author: {showAuthor}</p>
      </div>
      <div>
        <h2>{content}</h2>
      </div>
    </li>
  );
};

export default SingleMessage;
