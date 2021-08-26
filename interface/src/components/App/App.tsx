import React from 'react';
import AppBar from 'components/AppBar';
import { Route, Redirect, Switch } from 'react-router-dom';
import HomeScreen from 'components/HomeScreen';

import { Container, Contents } from './styles';

const App = ({
  history, username, isLoggedIn, getNameFailed, getUserName,
}) => {
  if (username === null && (!getNameFailed || isLoggedIn)) {
    getUserName();
    return <span />;
  }
  if (!isLoggedIn) {
    history.push('/login');
    return <span />;
  }

  return (
    <Container>
      <AppBar />
      <Contents>
        <Switch>
          <Route exact path="/messages" component={HomeScreen} />
          <Redirect to="/messages" />
        </Switch>
      </Contents>
    </Container>
  );
};

App.propTypes = {};

App.defaultProps = {};

export default App;
