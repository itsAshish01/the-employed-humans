import './Navbar.css';
import Temple from '../assets/temple.svg';
import { Link } from 'react-router-dom';
import { useLogout } from '../hooks/useLogout';
import { useAuthContext } from '../hooks/useAuthContext';

const Navbar = () => {
  const { logout, isPending } = useLogout();
  const { user } = useAuthContext();

  return (
    <nav className='navbar'>
      <ul>
        <li className='logo'>
          <img src={Temple} alt='Logo' />
          <span>The Employed Humans</span>
        </li>

        {!user && (
          <>
            <li>
              <Link to='/login'>Sign in</Link>
            </li>
            <li>
              <Link to='/signup'>Create account</Link>
            </li>
          </>
        )}

        {user && (
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
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
