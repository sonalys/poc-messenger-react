import React from 'react';
import { withRouter } from 'react-router';
import {
  Container, Logo, Title, Left, Logout,
} from './styles.js';

const AppBar = (props) => {
  const { performLogout } = props;

  return (
    <Container>
      <Left>
        <Logo />
        <Title>Hipster Messenger</Title>
      </Left>
      <Logout onClick={() => performLogout()}>Logout</Logout>
    </Container>
  );
};

AppBar.propTypes = {};

AppBar.defaultProps = {};

export default withRouter(AppBar);
