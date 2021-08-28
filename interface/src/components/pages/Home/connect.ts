import { connect } from 'react-redux';
import { getMessages, postMessage } from 'state_management/actions';
import HomeScreen from './HomeScreen';

const stateToProps = (state) => ({
  messages: state.reducer.messages,
  username: state.reducer.username,
  pendingResponse: state.reducer.pendingResponse,
});

const dispatchToProps = {
  getMessages,
  postMessage,
};

const ConnectedComponent = connect(
  stateToProps,
  dispatchToProps,
)(HomeScreen);

export default ConnectedComponent;
