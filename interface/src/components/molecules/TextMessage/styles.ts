import { text } from 'style';
import styled from 'styled-components';

export const Container = styled.div<{ hold: boolean, isFromUser: boolean }>`
  display: flex;
  align-items: center;
  align-self: ${({ isFromUser }) => isFromUser ? 'flex-end' : 'flex-start'};
  margin: 0 0 10px 0;

  .delete-button {
    display: none;
    margin-right: 10px;
  }

  :hover {
    .delete-button {
      display: block;
    }
  }
`;

export const MessageContainer = styled.div<{ deleting: boolean }>`
  display: flex;
  flex-direction: column;

  background-color: ${({ deleting }) => (deleting ? '#d55' : '#eea777')};

  border-radius: 8px;
  padding: 5px 10px;
`;

export const SenderText = styled.p`
  margin: 0;
  user-select: none;
  ${text({ color: '#000', family: 'normal', size: '13px', weight: 'bold' })}
`;

export const MessageText = styled.p`
  margin: 0;
  ${text({ color: '#000', family: 'normal', size: '16px' })}
`;