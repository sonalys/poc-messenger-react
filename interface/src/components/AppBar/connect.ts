import { connect } from 'react-redux';
import { performLogout } from 'state_management/actions';
import AppBar from './AppBar.jsx';

const stateToProps = () => ({
});

const dispatchToProps = {
  performLogout,
};

const ConnectedComponent = connect(
  stateToProps,
  dispatchToProps,
)(AppBar);

export default ConnectedComponent;
