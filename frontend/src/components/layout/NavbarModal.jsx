import classes from './NavbarModal.module.css';
import { Link } from 'react-router-dom';
import Backdrop from './Backdrop';

const NavbarModal = ({ onClose }) => {
  return (
    <>
      <Backdrop onClose={onClose} />
      <div className={classes.container}>
        <Link to='/login'>
          <h3>Login</h3>
        </Link>
        <Link to='/register'>
          <h3>Register</h3>
        </Link>
      </div>
    </>
  );
};

export default NavbarModal;
