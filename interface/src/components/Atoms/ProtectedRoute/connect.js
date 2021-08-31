import { connect } from 'react-redux';
import Component from './ProtectedRoute';

const stateToProps = (state) => ({
  isLoggedIn: state.reducer.isLoggedIn,
});

const dispatchToProps = {};

const ConnectedComponent = connect(
  stateToProps,
  dispatchToProps,
)(Component);

export default ConnectedComponent;