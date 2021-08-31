import { ReactElement } from 'react';
import { InputForm } from './styles';
import { TextField } from 'components/atoms/TextField';
import { InputLabel } from 'components/atoms/InputLabel';
import { KeyboardEventHandler } from 'react';
import { ChangeEventHandler } from 'react';

export interface IProps {
  label: string;
  fieldId?: string;
  className?: string;
  type?: 'text' | 'password';
  value?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  onKeyDown?: KeyboardEventHandler;
}

export const TextInput = ({
  label,
  fieldId,
  className,
  onKeyDown,
  onChange,
  type = 'text',
  value,
}: IProps): ReactElement => (
  <InputForm className={className}>
    <InputLabel>{label}</InputLabel>
    <TextField
      id={fieldId}
      type={type}
      onChange={onChange}
      onKeyDown={onKeyDown}
      value={value}
    />
  </InputForm>
);
