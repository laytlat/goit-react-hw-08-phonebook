import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from 'redux/operations/authOperations';

export default function Register() {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = e => {
    const { name, value } = e.currentTarget;
    if (name === 'email') {
      setEmail(value);
    }
    if (name === 'password') {
      setPassword(value);
    }
    if (name === 'name') {
      setName(value);
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    const user = { name, email, password };
    dispatch(register(user));
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <div>
      <h2>Please register or login if you already have an account</h2>
      <form onSubmit={handleSubmit}>
        <label>
          name
          <input type="text" name="name" value={name} onChange={handleChange} />
        </label>
        <label>
          email
          <input
            type="text"
            name="email"
            value={email}
            onChange={handleChange}
          />
        </label>
        <label>
          password
          <input
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Register</button>
      </form>
    </div>
  );
}
