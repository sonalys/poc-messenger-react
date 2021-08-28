import styled, { keyframes } from 'styled-components';
import { text, onMobile } from 'style';
import { bounceInDown } from 'react-animations';
import { SubmitButton } from 'components/atoms/SubmitButton.jsx';

const cardAnimation = keyframes`${bounceInDown}`;

export const LoginButton = styled(SubmitButton)`
  width: 70px;
  height: 34px;
`;

export const Card = styled.div`
  background-color: var(--background-color);
  padding: 32px 24px 60px 24px;
  border: 3px solid var(--primary-color);
  border-radius: 8px;
  animation: 400ms ${cardAnimation};

  width: 220px;

  display: grid;
  grid-template-rows: auto auto auto 20px 50px;
  align-content: center;
  justify-items: center;

  ${onMobile`
    width: 100vw;
    height: 100vh;
    border: 0;
  `}

  .title {
    margin-bottom: 24px;
  }

  .username {
    margin-bottom: 12px;
  }

  .password {
    margin-bottom: 7px;
  }

  .button {
    grid-row-start: 5;
    align-self: end;
  }
`;

export const TitleLabel = styled.a`
  user-select: none;
  margin-bottom: 7px;
  justify-self: center;
  ${text({ color: '#545454', size: '16px', family: 'normal', weight: 'bold' })}
`;

export const LoginError = styled.div`
  color: var(--error-color);
  display: ${({ show }) => (show ? 'block' : 'none')};
  ${text({ color: 'red', size: '13px', family: 'normal' })}
`;
