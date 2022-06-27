import classes from './Logo.module.css';
import { Link } from 'react-router-dom';

const Logo = () => {
  return (
    <Link to='/' className={classes['logo']}>
      <h2>
        <span>mern</span>
        Board
      </h2>
    </Link>
  );
};

export default Logo;
