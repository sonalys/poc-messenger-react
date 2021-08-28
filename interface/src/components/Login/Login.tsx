import React, { useEffect, ReactElement } from 'react';
import {
  TitleLabel,
  Container,
  Card,
  Logo,
  LoginError,
  LoginButton,
} from './styles';

import { TextInput } from './TextInput';

interface LoginProps {
  isLoggedIn: boolean;
  performLogin: (login: string, password: string) => void;
  loginError: string;
  username?: string;
  getUserName: () => void;
  history: string[];
  pendingResponse: boolean;
}

const Login = ({
  isLoggedIn,
  performLogin,
  loginError,
  username,
  getUserName,
  history,
  pendingResponse,
}: LoginProps): ReactElement => {
  if (isLoggedIn) history.push('/messages');

  const [usernameBuffer, setUsername] = React.useState('');
  const [passwordBuffer, setPassword] = React.useState('');

  const handleLoginInput = ({ target: { value } }) => setUsername(value);
  const handlePasswordInput = ({ target: { value } }) => setPassword(value);
  const handlerPasswordKeyDown = ({ code }) => code === 'Enter' && doLogin();
  const doLogin = () => performLogin(usernameBuffer, passwordBuffer);

  useEffect(() => {
    getUserName();
  }, []);
  useEffect(() => {
    !!username && setUsername(username);
  }, [username]);

  return (
    <Container>
      <Logo src="imgs/logo.svg" />
      <Card>
        <TitleLabel className="title">LOGIN</TitleLabel>
        <TextInput
          fieldId="login-username"
          label="Username:"
          className="username"
          value={usernameBuffer}
          onChange={handleLoginInput}
        />
        <TextInput
          fieldId="login-password"
          label="Password:"
          className="password"
          type="password"
          value={passwordBuffer}
          onChange={handlePasswordInput}
          onKeyDown={handlerPasswordKeyDown}
        />
        <LoginError className="error" show={!!loginError}>
          {loginError}
        </LoginError>
        <LoginButton disabled={pendingResponse} type="submit" onClick={doLogin}>
          Login
        </LoginButton>
      </Card>
    </Container>
  );
};

export default Login;
