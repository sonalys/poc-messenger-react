import styled from 'styled-components';
import {
  text,
} from 'style';
import { PrimaryButton } from 'components/atoms/PrimaryButton';

export const Container = styled.div`
  padding: 0 10px;
  display: flex;
  width: 100%;
`;

export const TextInput = styled.input`
  flex: 2;
  border: 0;
  margin-right: 20px;
  outline: 0;

  ${text({ color: "#707070", family: "normal", size: "13px" })}
`;

export const SendButton = styled(PrimaryButton)`
  width: 70px;
  height: 24px;
`;