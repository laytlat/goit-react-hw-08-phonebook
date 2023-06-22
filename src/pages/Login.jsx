import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from 'redux/operations/authOperations';

export default function Login() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onHandleChange = e => {
    const { name, value } = e.currentTarget;
    if (name === 'email') {
      setEmail(value);
    }
    if (name === 'password') {
      setPassword(value);
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    const user = { email, password };
    dispatch(login(user));
    setEmail('');
    setPassword('');
  };

  return (
    <div>
      <h2>Please login or create new account</h2>
      <form onSubmit={handleSubmit}>
        <label>
          email
          <input
            type="text"
            name="email"
            value={email}
            onChange={onHandleChange}
          />
        </label>
        <label>
          password
          <input
            type="password"
            name="password"
            value={password}
            onChange={onHandleChange}
          />
        </label>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
