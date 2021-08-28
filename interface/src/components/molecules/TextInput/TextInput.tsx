import { ReactElement } from 'react';
import { InputForm } from './styles';
import { TextField } from 'components/atoms/TextField';
import { InputLabel } from 'components/atoms/InputLabel';

export type EventHandler = (key: any) => void;

export interface TextInputProps {
  label: string;
  fieldId?: string;
  className?: string;
  type?: 'text' | 'password';
  value?: string;
  onChange?: EventHandler;
  onKeyDown?: EventHandler;
}

export const TextInput = ({
  label,
  fieldId,
  className,
  onKeyDown,
  onChange,
  type = 'text',
  value,
}: TextInputProps): ReactElement => (
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
