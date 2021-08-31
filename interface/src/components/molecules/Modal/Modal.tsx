import { MouseEvent, ReactElement } from 'react';
import { BlackOverlay } from 'components/atoms/BlackOverlay';
import { StyledCard } from './styles';

interface IProps {
  children?: (ReactElement | string)[];
  className?: string;
  onCancel: () => void;
}

const Modal = ({ onCancel, children, className }: IProps): ReactElement => {
  const cancelHandler = (e: MouseEvent) => e.stopPropagation();
  return (
    <BlackOverlay onMouseUp={onCancel}>
      <StyledCard className={className} onMouseUp={cancelHandler}>
        {children}
      </StyledCard>
    </BlackOverlay>
  );
};

export default Modal;
