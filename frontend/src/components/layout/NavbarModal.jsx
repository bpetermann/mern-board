import classes from './NavbarModal.module.css';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout, reset } from '../../features/auth/authSlice';
import Backdrop from './Backdrop';

const NavbarModal = ({ onClose }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  const onLogout = () => {
    dispatch(logout());
    dispatch(reset());
    navigate('/');
  };

  return (
    <>
      <Backdrop onClose={onClose} />
      <div className={classes.container}>
        {user ? (
          <Link to='/login' className={classes['logout-button']}>
            <span onClick={onLogout}>Logout</span>
          </Link>
        ) : (
          <>
            <Link to='/login'>
              <h3>Login</h3>
            </Link>
            <Link to='/register'>
              <h3>Register</h3>
            </Link>
          </>
        )}
      </div>
    </>
  );
};

export default NavbarModal;
