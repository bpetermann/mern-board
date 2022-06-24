import styles from './Navbar.module.css';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout, reset } from '../../features/auth/authSlice';
import { GiHamburgerMenu } from 'react-icons/gi';

const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  const onLogout = () => {
    dispatch(logout());
    dispatch(reset());
    navigate('/');
  };
  return (
    <header>
      <div className={styles['navbar']}>
        <div className={styles['container']}>
          <div className={styles['navbar-left']}>
            <Link to='/'>
              <GiHamburgerMenu size={26} className={styles['burger-button']} />
            </Link>
            <Link to='/' className={styles['navbar-link-item']}>
              <h2>Homepage</h2>
            </Link>
          </div>
          <div className={styles['navbar-right']}>
            {user ? (
              <button
                to='/login'
                onClick={onLogout}
                className={styles['logout-button']}
              >
                Logout
              </button>
            ) : (
              <>
                <Link to='/login' className={styles['navbar-link-item']}>
                  <h3>Login</h3>
                </Link>
                <Link to='/register' className={styles['navbar-link-item']}>
                  <h3>Register</h3>
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
