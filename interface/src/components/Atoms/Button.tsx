import styled from 'styled-components';
import { text } from 'style';

export const Button = styled.button`
  border-radius: 4px;

  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);

  border: 0;
  outline: 0;

  transition: background-color 0.25s ease;

  &:disabled {
    background-color: #cecece;
  }

  ${text({ color: '#fff', family: 'normal', size: '13px', weight: 'bold' })}
`;
