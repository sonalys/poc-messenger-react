import { useEffect, ReactElement } from 'react';
import { Container, MessageCard } from './styles';
import ChatSection from 'components/templates/ChatSection/ChatSection';
import React from 'react';
import { Message } from 'entities/Message';

interface IProps {
  username?: string;
  messages?: Message[];
  pendingResponse?: boolean;
  lastMessagePollingTime?: number;
  getMessages: (since?: number) => void;
  postMessage?: (message: string) => void;
  deleteMessage?: (index: number) => void;
  pollingInterval?: number;
}

const Messages = ({
  username,
  messages = [],
  pendingResponse,
  getMessages,
  postMessage,
  deleteMessage,
  lastMessagePollingTime = 0,
  pollingInterval = 2000,
}: IProps): ReactElement => {
  const [polling, setPolling] = React.useState(undefined);
  useEffect(() => {
    getMessages();
  }, []);

  useEffect(() => {
    if (polling !== undefined) {
      clearInterval(polling);
    }

    setPolling(
      setInterval(() => getMessages(lastMessagePollingTime), pollingInterval)
    );

    return () => clearInterval(polling);
  }, [lastMessagePollingTime]);

  return (
    <Container>
      <MessageCard>
        <ChatSection
          username={username}
          messages={messages}
          deleteMessage={deleteMessage}
          postMessage={postMessage}
          pendingResponse={pendingResponse}
        />
      </MessageCard>
    </Container>
  );
};

export default Messages;
