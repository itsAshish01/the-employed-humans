import './Navbar.css';
import Temple from '../assets/temple.svg';
import { Link } from 'react-router-dom';

const Navbar = () => {
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
          <button className='btn'>Sign out</button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
