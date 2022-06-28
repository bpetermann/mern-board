import classes from './CreateMessageLink.module.css';
import { Link } from 'react-router-dom';

const CreateMessageLink = () => {
  return (
    <Link to='/message' className={classes['new-message-link']}>
      <h3>Add Message</h3>
    </Link>
  );
};

export default CreateMessageLink;
