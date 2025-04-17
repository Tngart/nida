// import EmailOutlined from "@mui/icons-material/EmailOutlined";
import InputAdornment from '@mui/material/InputAdornment';
import type { TextFieldProps } from '@mui/material/TextField';
import type { Control, FieldValues, Path } from 'react-hook-form';

import Input from './input';

export default function EmailInput<T extends FieldValues>({
  ...props
}: TextFieldProps & { control: Control; name?: Path<T> }) {
  return (
    <Input
      {...props}
      fullWidth
      label={props.label}
      placeholder={props.placeholder || 'your@email.com'}
      autoComplete="email"
      type="email"
      slotProps={{
        ...props.slotProps,
        inputLabel: { shrink: true },
        input: {
          ...props.slotProps?.input,
          startAdornment: <InputAdornment position="start">{/* <EmailOutlined fontSize="small" /> */}</InputAdornment>,
        },
      }}
    />
  );
}
