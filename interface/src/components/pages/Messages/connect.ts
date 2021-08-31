import { connect } from 'react-redux';
import { getMessages, postMessage, deleteMessage } from 'state_management/actions';
import Messages from './Messages';

const stateToProps = ({ reducer: { messages, username, pendingResponse, lastMessagePollingTime } }) => ({
  messages,
  username,
  pendingResponse,
  lastMessagePollingTime,
});

const dispatchToProps = {
  getMessages,
  postMessage,
  deleteMessage,
};

const ConnectedComponent = connect(
  stateToProps,
  dispatchToProps,
)(Messages);

export default ConnectedComponent;
