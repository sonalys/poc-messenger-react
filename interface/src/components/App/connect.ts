import { connect } from 'react-redux';
import { getUserName } from 'state_management/actions';
import App from './App';

const stateToProps = ({ reducer: { isLoggedIn, username, getNameFailed } }) => ({
  isLoggedIn,
  username,
  getNameFailed,
});

const dispatchToProps = {
  getUserName,
};

const ConnectedComponent = connect(
  stateToProps,
  dispatchToProps,
)(App);

export default ConnectedComponent;
