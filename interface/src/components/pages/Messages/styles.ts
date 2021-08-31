import styled from 'styled-components';
import {
  onMobile, onDesktop, flex, text,
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
  background-color: #fff;
  overflow: hidden;

  ${flex({ align: 'center', justify: 'center', direction: 'column' })}

  ${onMobile`
      width: 100%;
      padding-bottom: 24px;
  `}
  ${onDesktop`
    width: 90vw;
    max-width: 800px;
    border-radius: 8px;
    border: 3px solid var(--primary-color);
    padding: 0 24px 24px 40px;
    max-height: 70vh;
  `}
`;

export const MessageText = styled.div`
  ${text({ color: "#000", family: "normal", size: "16px" })}
`;

