import { onDesktop, onMobile, text } from "style";
import styled, { keyframes } from "styled-components";

export const TextAreaContainer = styled.div`
  width: 100%;
  border-top: 1px solid #a2aaad;

  display: flex;
  
  ${onMobile`
    padding-top: 12px;
  `}
  ${onDesktop`
    padding-top: 24px;
  `}
`;

const autoHideAnimation = keyframes`
  from {
    height: auto;
  }

  to {
    transform: translateY(-100px);
    height: 0;
  }
`;

export const InfoLabel = styled.p`
  margin: 0;
  ${text({ color: '#000', family: 'normal', size: '16px' })}
  animation-name: ${autoHideAnimation};
  animation-duration: 1s;
  animation-delay: 2s;
  animation-iteration-count: 1;
  animation-fill-mode: forwards;
`;