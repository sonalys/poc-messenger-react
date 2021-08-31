import ChatHistory from 'components/organisms/ChatHistory';
import ChatInput from 'components/organisms/ChatInput';
import { Message } from 'entities/Message';
import { ReactElement } from 'react';
import { TextAreaContainer, InfoLabel } from './styles';

interface IProps {
  username?: string;
  messages?: Message[];
  pendingResponse?: boolean;
  postMessage?: (message: string) => void;
  deleteMessage?: (index: number) => void;
}

const ChatSection = ({
  username,
  messages,
  deleteMessage,
  postMessage,
  pendingResponse,
}: IProps): ReactElement => (
  <>
    <InfoLabel>
      You are logged in as <b>{username}</b>
    </InfoLabel>
    <ChatHistory
      messages={messages}
      deleteMessage={deleteMessage}
      username={username}
    />
    <TextAreaContainer>
      <ChatInput postMessage={postMessage} pendingResponse={pendingResponse} />
    </TextAreaContainer>
  </>
);

export default ChatSection;
