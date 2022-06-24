import styles from './Navbar.module.css';
import { Link } from 'react-router-dom';
import { GiHamburgerMenu } from 'react-icons/gi';

const Navbar = () => {
  return (
    <header>
      <div className={styles['navbar']}>
        <div className={styles['container']}>
          <div className={styles['navbar-left']}>
            <Link to='/'>
              <GiHamburgerMenu size={26} className={styles['burger-button']} />
            </Link>
            <Link to='/'>
              <h2>Homepage</h2>
            </Link>
          </div>
          <div className={styles['navbar-right']}>
            <Link to='/login'>
              <h3>Login</h3>
            </Link>

            <Link to='/register'>
              <h3>Register</h3>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
