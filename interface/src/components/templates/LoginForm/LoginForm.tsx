import React, { useEffect, ReactElement } from 'react';
import { TitleLabel, Card, LoginError, LoginButton } from './styles';

import TextInput from 'components/molecules/TextInput';

interface LoginFormProps {
  performLogin: (login: string, password: string) => void;
  loginError: string;
  username?: string;
  pendingResponse: boolean;
}

const LoginForm = ({
  performLogin,
  loginError,
  username,
  pendingResponse,
}: LoginFormProps): ReactElement => {
  const [usernameBuffer, setUsername] = React.useState('');
  const [passwordBuffer, setPassword] = React.useState('');
  const [error, setError] = React.useState('');

  const handleLoginInput = ({ target: { value } }) => setUsername(value);
  const handlePasswordInput = ({ target: { value } }) => setPassword(value);
  const handlerPasswordKeyDown = ({ code }) => code === 'Enter' && doLogin();

  const doLogin = () =>
    usernameBuffer.length > 0 && passwordBuffer.length > 0
      ? performLogin(usernameBuffer, passwordBuffer)
      : setError('Username and password are required!');

  useEffect(() => {
    !!username && setUsername(username);
  }, [username]);

  useEffect(() => {
    setError(loginError);
  }, [loginError]);

  return (
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
      <LoginError className="error" show={!!error}>
        {error}
      </LoginError>
      <LoginButton
        className="button"
        disabled={pendingResponse}
        type="submit"
        onClick={doLogin}
      >
        Login
      </LoginButton>
    </Card>
  );
};

export default LoginForm;
