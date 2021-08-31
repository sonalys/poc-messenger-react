import { KeyboardEvent, ReactElement, useState } from 'react';
import { Container, SendButton, TextInput } from './styles';

interface IProps {
  postMessage: (message: string) => void;
  pendingResponse: boolean;
}

const ChatInput = ({ postMessage, pendingResponse }: IProps): ReactElement => {
  const [messageInput, setMessage] = useState('');
  const inputHandler = ({ target: { value } }) => setMessage(value);
  const handlerInputKeyDown = ({ key }: KeyboardEvent) => {
    if (key === 'Enter') sendMessage();
  };
  const sendMessage = () => {
    if (messageInput.length === 0) return;
    postMessage(messageInput);
    setMessage('');
  };

  return (
    <Container>
      <TextInput
        id="message-field"
        type="text"
        value={messageInput}
        placeholder="Write your message here"
        onChange={inputHandler}
        onKeyDown={handlerInputKeyDown}
      />
      <SendButton
        disabled={pendingResponse || messageInput.length === 0}
        onClick={sendMessage}
      >
        Send
      </SendButton>
    </Container>
  );
};

export default ChatInput;
