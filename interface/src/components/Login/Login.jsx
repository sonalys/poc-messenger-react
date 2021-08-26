import { useState, useEffect } from 'react';
import {
  TitleLabel, TextInput, Container, Card, Logo, LoginError, LoginButton
} from './styles.js';

const Login = ({
  isLoggedIn, performLogin, loginError,
  username, getUserName, history, pendingResponse,
}) => {
  if (isLoggedIn) history.push('/messages');

  const [ usernameBuffer, setUsername ] = useState("");
  const [ passwordBuffer, setPassword ] = useState("");

  const handleLoginInput = ({ target: { value }}) => setUsername(value);
  const handlePasswordInput = ({ target: { value }}) => setPassword(value);
  const doLogin = () => performLogin(usernameBuffer, passwordBuffer);
  const handlerPasswordKeyDown = ({ code }) => {
    if (code === "Enter") doLogin();
  };

  useEffect(() => { getUserName() }, []);
  useEffect(() => username !== null && setUsername(username), [username]);

  return (
    <Container>
      <Logo src="imgs/logo.svg" />
      <Card>
        <TitleLabel className="title" >LOGIN</TitleLabel>
        <TextInput
          id="login-username"
          label="Username:"
          className="username"
          value={usernameBuffer}
          onChange={handleLoginInput}
        />
        <TextInput
          id="login-password"
          label="Password:"
          className="password"
          type="password"
          value={passwordBuffer}
          onChange={handlePasswordInput}
          onKeyDown={handlerPasswordKeyDown}
        />
        <LoginError className="error" show={!!loginError}>{loginError}</LoginError>
        <LoginButton disabled={pendingResponse} type="submit" onClick={doLogin}>Login</LoginButton>
      </Card>
    </Container>
  );
};

Login.propTypes = {};

Login.defaultProps = {};

export default Login;
