import { connect } from 'react-redux';
import { performLogin, getUserName } from 'state_management/actions';
import Component from './Login';

const stateToProps = ({ reducer: { isLoggedIn, loginError, username, pendingResponse } }) => ({
  isLoggedIn,
  loginError,
  username,
  pendingResponse,
});

const dispatchToProps = {
  performLogin,
  getUserName,
};

const ConnectedComponent = connect(
  stateToProps,
  dispatchToProps,
)(Component);

export default ConnectedComponent;