import { ReactElement } from 'react';
import {
  CancelButton,
  ConfirmButton,
  ModalButtonContainer,
  StyledModal,
} from './styles';

interface IProps {
  onCancel: () => void;
  onConfirm: () => void;
  message: ReactElement | string;
}

const ConfirmationModal = ({
  onCancel,
  onConfirm,
  message,
}: IProps): ReactElement => {
  return (
    <StyledModal onCancel={onCancel}>
      {message}
      <ModalButtonContainer>
        <CancelButton onMouseUp={onCancel}>Cancel</CancelButton>
        <ConfirmButton onMouseUp={onConfirm}>Confirm</ConfirmButton>
      </ModalButtonContainer>
    </StyledModal>
  );
};

export default ConfirmationModal;
