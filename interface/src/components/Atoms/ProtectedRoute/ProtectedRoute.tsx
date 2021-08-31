import { ReactElement } from 'react';
import { Route, Redirect } from 'react-router-dom';

interface IProps {
  isLoggedIn: boolean;
  children: ReactElement;
  rest?: unknown;
}

// A wrapper for <Route> that redirects to the login
// screen if you're not yet authenticated.
const ProtectedRoute = ({
  isLoggedIn,
  children,
  ...rest
}: IProps): ReactElement => (
  <Route
    {...rest}
    render={({ location }) =>
      isLoggedIn ? (
        children
      ) : (
        <Redirect
          to={{
            pathname: '/login',
            state: { from: location },
          }}
        />
      )
    }
  />
);

export default ProtectedRoute;
