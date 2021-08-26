import styled from 'styled-components';
import {
  spacing, onMobile, onDesktop, flex, text,
} from 'style';

export const Container = styled.div`
  height: 100%;
  overflow: auto;
  box-sizing: border-box;
  background-color: #EEE;
  ${flex({ align: 'center', justify: 'center', direction: 'column' })}
  overflow: hidden;

  ${onMobile`
    height: calc(100vh - 60px);
  `}
  ${onDesktop`
    height: calc(100vh - 80px);
  `}
`;

export const MessageCard = styled.div`
  flex-grow: 1;
  background-color: var(--background-color);
  overflow: hidden;

  ${flex({ align: 'center', justify: 'center', direction: 'column' })}

  ${onMobile`
      width: 100%;
      padding: ${spacing.normal / 2}px;
  `}
  ${onDesktop`
    width: 90vw;
    max-width: 800px;
    border-radius: 8px;
    border: 3px solid var(--primary-color);
    padding: 24px 40px;
    max-height: 70vh;
  `}
`;

export const Chat = styled.div`
  flex-grow: 1;
  width: 100%;
  overflow: hidden auto;
`;

export const TextAreaContainer = styled.div`
  width: 100%;
  border-top: 1px solid #a2aaad;

  display: flex;
  
  ${onMobile`
    margin-top: ${spacing.normal / 2}px;
    padding-top: ${spacing.normal / 2}px;
  `}
  ${onDesktop`
    padding-top: 24px;
  `}
`;

export const ChatMessageContainer = styled.div`
  width: 100%;
  padding: 4px;
  ${onDesktop`
    margin: 4px;
  `}
  ${flex({})}
`;

export const MessageSender = styled.div`
  font-weight: bold;
  padding-right: 8px;

`;

export const MessageText = styled.div`
`;

export const TextInput = styled.input`
  flex: 2;
  border: 0;
  margin-right: 20px;
  outline: 0;

  ${text({ color: "#707070", family: "normal", size: "13px" })}
`;

export const SendButton = styled.button`
  width: 70px;
  height: 24px;
  border-radius: 4px;
  background-color: var(--primary-color);
  box-shadow: 0 3px 6px rgba(0,0,0,0.16);
  border: 0;

  &:disabled {
    background-color: #cecece;
  }

  ${text({ color: "var(--background-color)", family: "normal", size: "13px", weight: "bold" })}
`;