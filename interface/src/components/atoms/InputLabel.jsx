import styled from 'styled-components';
import { text } from 'style';

export const InputLabel = styled.a`
  user-select: none;
  margin-bottom: 7px;
  ${text({ color: 'var(--secondary-color)', size: '13px', family: 'normal' })}
`;