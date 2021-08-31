import styled, { keyframes } from 'styled-components';
import { flex, onMobile } from 'style';
import { fadeIn } from 'react-animations';

const logoAnimation = keyframes`${fadeIn}`;

export const Container = styled.div`
  background-color: #eee;
  background-repeat: no-repeat;
  background-position: center;
  background-image: url(/imgs/login_bg.svg);
  background-size: cover;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  ${flex({ align: 'center', justify: 'center', direction: 'column' })}

  ${onMobile`
    padding: 20px;
  `}
`;

export const Logo = styled.img`
  width: 90%;
  max-width: 250px;
  margin-bottom: 24px;
  animation: 800ms ${logoAnimation};
`;
