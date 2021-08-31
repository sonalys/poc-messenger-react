import React, { useEffect, ReactElement } from 'react';
import TextMessage from 'components/molecules/TextMessage';
import { Chat, MessageList } from './styles';
import ConfirmationModal from 'components/organisms/ConfirmationModal';
import { Message } from 'entities/Message';

export interface IProps {
  messages: Message[];
  deleteMessage: (index: number) => void;
  username: string;
}

const ChatHistory = ({
  messages,
  deleteMessage,
  username,
}: IProps): ReactElement => {
  const listRef = React.useRef<HTMLDivElement>(null);
  const [deletingIndex, setDeletingIndex] = React.useState(-1);
  const [stickyScroll, setStickyScroll] = React.useState(true);

  const cancelDeletion = () => setDeletingIndex(-1);
  const confirmDeletion = () => {
    deleteMessage(deletingIndex);
    cancelDeletion();
  };

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const {
      currentTarget: { scrollTop, offsetHeight, scrollHeight },
    } = e;
    // confirms that the chat is scrolled all the way down.
    setStickyScroll(scrollTop + offsetHeight >= scrollHeight);
  };

  useEffect(() => {
    const { current } = listRef;
    if (!current || !stickyScroll) return;
    current?.scrollIntoView(false);
  }, [messages]);

  return (
    <Chat onScroll={handleScroll}>
      <MessageList ref={listRef}>
        {messages.map((msg, index) => (
          <TextMessage
            key={index}
            msg={msg}
            deleteAction={() => setDeletingIndex(index)}
            deleting={deletingIndex === index}
            isFromUser={username === msg.sender}
          />
        ))}
      </MessageList>
      {deletingIndex > -1 && (
        <ConfirmationModal
          message="Are you sure you want to delete this message?"
          onCancel={cancelDeletion}
          onConfirm={confirmDeletion}
        />
      )}
    </Chat>
  );
};

export default ChatHistory;
