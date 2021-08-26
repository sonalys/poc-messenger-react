import { connect } from 'react-redux';
import { getUserName } from 'state_management/actions';
import App from './App';

const stateToProps = (state) => ({
  isLoggedIn: state.reducer.isLoggedIn,
  username: state.reducer.username,
  getNameFailed: state.reducer.getNameFailed,
});

const dispatchToProps = {
  getUserName,
};

const ConnectedComponent = connect(
  stateToProps,
  dispatchToProps,
)(App);

export default ConnectedComponent;
