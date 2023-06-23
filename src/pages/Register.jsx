import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from 'redux/operations/authOperations';
import {
  StyledTitle,
  StyledForm,
  StyledLabel,
  StyledInput,
  ButtonContainer,
  StyledButton,
} from './stylesForPages/LoginAndRegister.styled';

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
      <StyledTitle>
        Please register or login if you already have an account
      </StyledTitle>
      <StyledForm onSubmit={handleSubmit}>
        <StyledLabel>
          name
          <StyledInput
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
          />
        </StyledLabel>
        <StyledLabel>
          email
          <StyledInput
            type="text"
            name="email"
            value={email}
            onChange={handleChange}
          />
        </StyledLabel>
        <StyledLabel>
          password
          <StyledInput
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
          />
        </StyledLabel>
        <ButtonContainer>
          <StyledButton type="submit">Register</StyledButton>
        </ButtonContainer>
      </StyledForm>
    </div>
  );
}
