import { ReactElement } from 'react';
import AppBar from 'components/AppBar';
import { Switch, Route, Redirect } from 'react-router-dom';

import { Container, Contents } from './styles';

import Home from 'components/pages/Home';

const App = (): ReactElement => {
  return (
    <Container>
      <AppBar />
      <Contents>
        <Switch>
          <Route exact path="/messages" component={Home} />
          <Redirect to="/messages" />
        </Switch>
      </Contents>
    </Container>
  );
};

export default App;
