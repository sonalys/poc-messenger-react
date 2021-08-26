import { useState } from 'react';

import {
  Container,
  MessageCard,
  TextAreaContainer,
  Chat,
  ChatMessageContainer,
  MessageText,
  TextInput,
  SendButton
} from './styles.js';

const HomeScreen = ({
    username, messages, pendingResponse, getMessages, postMessage,
  }) => {
  const [ message, setMessage ] = useState("");

  const inputHandler = ({ target: { value }}) => setMessage(value);
  const sendMessage = () => {
    postMessage(username, message);
    setMessage("");
  };
  const handlerInputKeyDown = ({ code }) => {
    if (code === "Enter") sendMessage();
  };

  if (messages === null && !pendingResponse) {
    getMessages();
    return <span />;
  }

  return (
    <Container>
      <MessageCard>
        <Chat>
          <MessageText>
            You are logged in as
            {' '}
            <b>{username}</b>
          </MessageText>
          {messages.map((msg, index) => (
            <ChatMessageContainer key={`message-${index}`}>
              <MessageText>
                <b>{msg.sender}</b>
                {' '}
                {msg.message}
              </MessageText>
            </ChatMessageContainer>
          ))}
        </Chat>
        <TextAreaContainer>
          <TextInput
            id="message-field"
            type="text"
            value={message}
            placeholder="Write your message here"
            onChange={inputHandler}
            onKeyDown={handlerInputKeyDown}
          />
          <SendButton disabled={pendingResponse || message.length === 0} onClick={sendMessage}>Send</SendButton>
        </TextAreaContainer>
      </MessageCard>
    </Container>
  );
};

HomeScreen.propTypes = {};

HomeScreen.defaultProps = {};

export default HomeScreen;
