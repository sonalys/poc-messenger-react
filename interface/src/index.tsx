import { render } from 'react-dom';
import { Provider } from 'react-redux';
import {
  Switch,
  Route,
  BrowserRouter as Router,
  Redirect,
} from 'react-router-dom';
import createStore from 'state_management/store.js';
import App from 'app';
import Login from 'components/pages/Login';
import { GlobalStyle } from 'style';
import ProtectedRoute from 'components/atoms/ProtectedRoute';

const store = createStore();

const RootComponent = () => (
  <div>
    <GlobalStyle />
    <Router>
      <Provider store={store}>
        <Switch>
          <Route exact path="/login" component={Login} />
          <ProtectedRoute>
            <Route path="/" component={App} />
          </ProtectedRoute>
          <Redirect to="/" />
        </Switch>
      </Provider>
    </Router>
  </div>
);

const entry = (): void => {
  const rootElement = document.getElementById('root');
  render(<RootComponent />, rootElement);
};

entry();
