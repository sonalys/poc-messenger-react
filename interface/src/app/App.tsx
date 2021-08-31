import { ReactElement } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Container, Contents } from './styles';

import AppBar from 'components/organisms/AppBar';
import Messages from 'components/pages/Messages';

const App = (): ReactElement => (
  <Container>
    <AppBar />
    <Contents>
      <Switch>
        <Route exact path="/messages" component={Messages} />
        <Redirect to="/messages" />
      </Switch>
    </Contents>
  </Container>
);

export default App;
