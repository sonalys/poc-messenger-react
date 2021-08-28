import { ReactElement } from 'react';
import { InputForm, InputLabel, TextField } from './styles';

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
