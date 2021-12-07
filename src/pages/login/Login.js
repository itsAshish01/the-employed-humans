import { useState } from 'react';
import './Login.css';
import { useLogin } from '../../hooks/useLogin';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { isPending, error, login } = useLogin();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email, password);
  };

  return (
    <form className='auth-form' onSubmit={handleSubmit}>
      <h2>Sign in</h2>
      <label>
        <span>email:</span>
        <input
          type='email'
          required
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
      </label>

      <label>
        <span>password:</span>
        <input
          type='password'
          required
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
      </label>

      <button>Sign in</button>

      {/* {!isPending && <button className='btn'>Sign in</button>}
      {isPending && (
        <button className='btn' disabled>
          Signing in...
        </button>
      )}
      {error && <div className='error'>{error}</div>} */}
    </form>
  );
};

export default Login;
