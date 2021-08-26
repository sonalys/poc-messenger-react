import { useState } from 'react';
import {
  TitleLabel, TextInput, Container, Card, Logo, LoginError, LoginButton
} from './styles.js';

const Login = ({
  isLoggedIn, performLogin, loginError,
  username: cachedUsername, getUserName, history, pendingResponse,
}) => {
  const [ username, setUsername ] = useState("");
  const [ password, setPassword ] = useState("");

  const handleLoginInput = ({ target: { value }}) => setUsername(value);
  const handlePasswordInput = ({ target: { value }}) => setPassword(value);
  const handleLoginButton = () => performLogin({username, password});

  useState(getUserName, []);
  useState(() => setUsername(cachedUsername), [cachedUsername]);

  if (isLoggedIn) {
    history.push('/messages');
    return <span />;
  }

  return (
    <Container>
      <Logo src="imgs/logo.svg" />
      <Card>
        <TitleLabel className="title" >LOGIN</TitleLabel>
        <TextInput onChange={handleLoginInput} className="username" label="Username:" id="login-username" value={username} />
        <TextInput onChange={handlePasswordInput} className="password" label="Password:" id="login-password" value={password} type="password" />
        <LoginError className="error" show={loginError !== null}>{loginError}</LoginError>
        <LoginButton disabled={pendingResponse} type="submit" onClick={handleLoginButton}>Login</LoginButton>
      </Card>
    </Container>
  );
};

Login.propTypes = {};

Login.defaultProps = {};

export default Login;
