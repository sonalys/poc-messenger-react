import styled from 'styled-components';
import { text } from 'style';
import { Button } from './Button';


export const PrimaryButton = styled(Button)`
  background-color: var(--primary-color);

  &:disabled {
    background-color: #cecece;
  }

  :active:not(:disabled) {
    background-color: #9d3f00;
  }

  :hover:not(:disabled) {
    background-color: #eea777;
  }
  
  ${text({ color: "#fff", family: "normal", size: "13px", weight: "bold" })}
`;