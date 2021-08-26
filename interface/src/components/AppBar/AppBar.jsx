import React from 'react';
import { withRouter } from 'react-router';
import {
  Container, Inner, Logo, Title, Left, Logout,
} from './styles.js';

const AppBar = (props) => {
  const { performLogout } = props;

  return (
    <Container>
      <Inner>
        <Left>
          <Logo />
          <Title>Hipster Messenger</Title>
        </Left>
        <Logout onClick={() => performLogout()}>Logout</Logout>
      </Inner>
    </Container>
  );
};

AppBar.propTypes = {};

AppBar.defaultProps = {};

export default withRouter(AppBar);
