import styles from './Navbar.module.css';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout, reset } from '../../features/auth/authSlice';
import { GiHamburgerMenu } from 'react-icons/gi';
import Logo from './Logo';

const Navbar = ({ toggleModal }) => {
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
            <button className={styles['mobile-navbar']} onClick={toggleModal}>
              <GiHamburgerMenu size={26} className={styles['burger-button']} />
            </button>
            <Logo />
          </div>
          <div className={styles['navbar-right']}>
            {user ? (
              <Link to='/login' className={styles['logout-button']}>
                <h3 onClick={onLogout}>Logout</h3>
              </Link>
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
