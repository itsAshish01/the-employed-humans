import './Navbar.css';
import Temple from '../assets/temple.svg';
import { Link } from 'react-router-dom';
import { useLogout } from '../hooks/useLogout';

const Navbar = () => {
  const { logout, isPending } = useLogout();

  return (
    <nav className='navbar'>
      <ul>
        <li className='logo'>
          <img src={Temple} alt='Logo' />
          <span>The Employed Humans</span>
        </li>
        <li>
          <Link to='/login'>Sign in</Link>
          <Link to='/signup'>Create account</Link>
        </li>

        <li>
          {!isPending && (
            <button className='btn' onClick={logout}>
              Sign out
            </button>
          )}
          {isPending && (
            <button className='btn' disabled>
              Signing out...
            </button>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
