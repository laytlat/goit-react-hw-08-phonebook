import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from 'redux/operations/authOperations';
import {
  StyledTitle,
  StyledForm,
  StyledLabel,
  StyledInput,
  ButtonContainer,
  StyledButton,
} from './stylesForPages/LoginAndRegister.styled';

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
      <StyledTitle>Please login or create new account</StyledTitle>
      <StyledForm onSubmit={handleSubmit}>
        <StyledLabel>
          email
          <StyledInput
            type="text"
            name="email"
            value={email}
            onChange={onHandleChange}
          />
        </StyledLabel>
        <StyledLabel>
          password
          <StyledInput
            type="password"
            name="password"
            value={password}
            onChange={onHandleChange}
          />
        </StyledLabel>
        <ButtonContainer>
          <StyledButton type="submit">Login</StyledButton>
        </ButtonContainer>
      </StyledForm>
    </div>
  );
}
