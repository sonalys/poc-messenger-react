import styled, { css } from 'styled-components';
import { Button } from 'components/atoms/Button';
import Modal from 'components/molecules/Modal';

const modalButtonStyle = css`
  padding: 10px;
  width: 100px;
  margin: 10px;
  cursor: pointer;
`;

export const StyledModal = styled(Modal)`
  max-width: 200px;
`;

export const ModalButtonContainer = styled.div`
  width: 100%;

  margin-top: 20px;

  display: flex;
  justify-content: center;
`;

export const CancelButton = styled(Button)`
  background-color: #545454;
  ${modalButtonStyle}
`;

export const ConfirmButton = styled(Button)`
  background-color: #a00;
  ${modalButtonStyle}
`;
