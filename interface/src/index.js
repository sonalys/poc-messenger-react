import { render } from 'react-dom';
import { Provider } from 'react-redux';
import {
  Switch,
  Route,
  BrowserRouter as Router,
  Redirect,
} from 'react-router-dom';
import createStore from 'state_management/store.js';
import App from 'components/App';
import Login from 'components/pages/Login';
import { GlobalStyle } from 'style';

const store = createStore();

const RootComponent = () => (
  <div>
    <GlobalStyle />
    <Router>
      <Provider store={store}>
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route path="/" component={App} />
          <Redirect to="/" />
        </Switch>
      </Provider>
    </Router>
  </div>
);

export default () => {
  const rootElement = document.getElementById('root');
  render(<RootComponent />, rootElement);
};
