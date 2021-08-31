import { ReactElement } from 'react';
import { Container, Logo, Title, Left, Logout } from './styles.js';

interface IProps {
  performLogout?: () => void;
}

const AppBar = ({ performLogout }: IProps): ReactElement => (
  <Container>
    <Left>
      <Logo />
      <Title>Hipster Messenger</Title>
    </Left>
    <Logout onClick={performLogout}>Logout</Logout>
  </Container>
);

export default AppBar;
