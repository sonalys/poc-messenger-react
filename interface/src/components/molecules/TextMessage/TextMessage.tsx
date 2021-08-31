import { ReactElement } from 'react';
import { Container, MessageContainer, MessageText, SenderText } from './styles';
import { AiFillDelete } from 'react-icons/ai';
import React from 'react';
import { Holdable } from 'react-touch';
import { Message } from 'entities/Message';

export interface IProps {
  msg: Message;
  isFromUser?: boolean;
  deleteAction?: () => void;
  deleting?: boolean;
}

const TextMessage = ({
  msg: { sender, message },
  isFromUser,
  deleteAction,
  deleting,
}: IProps): ReactElement => {
  const [touchHold, setTouchHold] = React.useState(false);
  const holdHandler = () => {
    if (isFromUser) setTouchHold(true);
  };

  return (
    <Holdable onHoldComplete={holdHandler}>
      <Container hold={touchHold} isFromUser={isFromUser}>
        {isFromUser && (
          <AiFillDelete
            className="delete-button"
            size="20px"
            color="#a00"
            cursor="pointer"
            onMouseUp={deleteAction}
          />
        )}
        <MessageContainer deleting={deleting}>
          <SenderText className="sender">{sender}</SenderText>
          <MessageText className="message">{message}</MessageText>
        </MessageContainer>
      </Container>
    </Holdable>
  );
};

export default TextMessage;
