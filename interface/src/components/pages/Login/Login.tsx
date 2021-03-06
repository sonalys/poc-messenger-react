import { useEffect, ReactElement } from 'react';
import { Container, Logo } from './styles';

import LoginForm from 'components/templates/LoginForm';

interface IProps {
  isLoggedIn?: boolean;
  performLogin?: (login: string, password: string) => void;
  loginError?: string;
  username?: string;
  getUserName: () => void;
  history: string[];
  pendingResponse?: boolean;
}

const Login = ({
  isLoggedIn,
  performLogin,
  loginError,
  username,
  getUserName,
  history,
  pendingResponse,
}: IProps): ReactElement => {
  useEffect(() => {
    getUserName();
  }, []);

  useEffect(() => {
    if (isLoggedIn) history.push('/messages');
  }, [isLoggedIn]);

  return (
    <Container>
      <Logo src="imgs/logo.svg" />
      <LoginForm
        performLogin={performLogin}
        loginError={loginError}
        username={username}
        pendingResponse={pendingResponse}
      />
    </Container>
  );
};

export default Login;
