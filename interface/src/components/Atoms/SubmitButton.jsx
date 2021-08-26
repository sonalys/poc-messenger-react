import styled from 'styled-components';
import { text } from 'style';


export const SubmitButton = styled.button`
  border-radius: 4px;
  background-color: var(--primary-color);
  box-shadow: 0 3px 6px rgba(0,0,0,0.16);
  border: 0;
  outline: 0;

  &:disabled {
    background-color: #cecece;
  }

  &:focus {
  }

  :active:not(:disabled) {
    background-color: var(--dark-primary-color);
    transition: background-color .25s ease-out;
  }

  ${text({ color: "var(--background-color)", family: "normal", size: "13px", weight: "bold" })}
`;