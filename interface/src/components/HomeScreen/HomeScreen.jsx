import React, { useState } from 'react';

import {
  Container,
  MessageCard,
  TextAreaContainer,
  Chat,
  ChatMessageContainer,
  MessageSender,
  MessageText,
  SendButton,
  TextInput,
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
  const keyDownHandler = ({ code }) => {
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
          <div>
            You are logged in as
            {username}
          </div>
          {messages.map((msg, index) => (
            <ChatMessageContainer key={`message-${index}`}>
              <MessageSender>
                {msg.sender}
              </MessageSender>
              <MessageText>
                {msg.message}
              </MessageText>
            </ChatMessageContainer>
          ))}
        </Chat>
        <TextAreaContainer>
          <TextInput id="message-field"
                     type="text"
                     value={message}
                     placeholder="Write your message here"
                     onChange={inputHandler}
                     onKeyDown={keyDownHandler}
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
