'use client';
import Autocomplete, { AutocompleteProps } from '@mui/material/Autocomplete';
import { TextFieldProps } from '@mui/material/TextField';
import { InputHTMLAttributes } from 'react';
import { Controller, FieldValues, FormProps, Path } from 'react-hook-form';
import Input from './input';

export default function Select<Control extends FieldValues>({
  control,
  helperText,
  helperTextHidden,
  label,
  name,
  required,
  textFieldAutoComplete,
  ...props
}: Omit<AutocompleteProps<{ id: string; label: string }, false, false, false>, 'renderInput'> &
  Pick<TextFieldProps, 'required'> &
  Pick<FormProps<Control>, 'control'> & {
    helperText?: boolean;
    helperTextHidden?: boolean;
    label?: string;
    name: Path<Control>;
    textFieldAutoComplete?: string;
    textFieldType?: InputHTMLAttributes<unknown>['type'];
  }) {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onBlur, onChange, value }, fieldState: { error } }) => (
        <Autocomplete
          {...props}
          filterOptions={(options, _) => options}
          getOptionDisabled={(option) => option.id === ''}
          inputValue={props.options.find((option) => option.id === value)?.label || ''}
          onBlur={onBlur}
          onChange={(_, data) => onChange(data?.id || '')}
          options={[{ id: '', label: label || '' }, ...props.options]}
          renderInput={(params) => (
            <Input
              {...params}
              autoComplete={textFieldAutoComplete}
              error={Boolean(error)}
              helperText={error?.message || helperText}
              helperTextHidden={helperTextHidden}
              label={label}
              required={required}
              type={props.textFieldType}
            />
          )}
          value={value}
        />
      )}
    />
  );
}
