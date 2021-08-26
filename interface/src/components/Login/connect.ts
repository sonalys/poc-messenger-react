import { connect } from 'react-redux';
import { performLogin, getUserName } from 'state_management/actions';
import Component from './Login.jsx';

const stateToProps = (state) => ({
  isLoggedIn: state.reducer.isLoggedIn,
  loginError: state.reducer.loginError,
  username: state.reducer.username,
  getNameFailed: state.reducer.getNameFailed,
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
