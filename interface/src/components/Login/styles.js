import styled, { keyframes } from 'styled-components';
import { text, flex, spacing, px } from 'style';
import { bounceInDown, fadeIn } from 'react-animations';

const cardAnimation = keyframes`${bounceInDown}`;
const logoAnimation = keyframes`${fadeIn}`;

export const Container = styled.div`
  background-color: #EEE;
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
`;

export const Card = styled.div`
  background-color: var(--background-color);
  padding: 32px 24px 60px 24px;
  border: 3px solid var(--primary-color);
  border-radius: 8px;
  animation: 400ms ${cardAnimation};
  
  ${flex({ direction: "column", align: "center", justify: "center" })}

  .title {
    margin-bottom: 24px;
  }

  .username {
    margin-bottom: 12px;
  }

  .password {
    margin-bottom: 7px;
  }

  .error {
    margin-bottom: 40px;
  }
`;

export const TitleLabel = styled.a`
  user-select: none;
  margin-bottom: 7px;
  justify-self: center;
  ${text({ color: "#545454", size: "16px", family: "normal", weight: "bold" })}
`;

const InputForm = styled.div`
  ${flex({direction: "column"})}
`;

export const TextInput = ({ label, id, className, type = "text", }) => (
<InputForm className={className}>
  <InputLabel>{label}</InputLabel>
  <TextField id={id} type={type} />
</InputForm>);

const TextField = styled.input`
  height: 24px;
  width: 146px;
  border-radius: 4px;
  background-color: var(--background-color);
  box-shadow: 0 3px 6px rgba(0,0,0,0.16);
  border: 0;
  outline: 0;
`;

export const InputLabel = styled.a`
  user-select: none;
  margin-bottom: 7px;
  ${text({ color: "var(--secondary-color)", size: "13px", family: "normal" })}
`;

export const Logo = styled.img`
  width: 250px;
  margin-bottom: ${px(spacing.normal)};
  animation: 800ms ${logoAnimation};
`;

export const LoginError = styled.div`
  color: var(--error-color);
  display: ${({ show }) => (show ? 'block' : 'none')};
  ${text({ color: "red", size: "13px", family: "normal" })}
`;

export const LoginButton = styled.button`
  width: 100px;
  height: 35px;
  border-radius: 4px;
  background-color: var(--primary-color);
  box-shadow: 0 3px 6px rgba(0,0,0,0.16);
  border: 0;

  &:disabled {
    background-color: #cecece;
  }

  ${text({ color: "var(--background-color)", family: "normal", size: "13px", weight: "bold" })}
`;