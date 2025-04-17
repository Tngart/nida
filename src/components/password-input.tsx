import VisibilityOff from '@mui/icons-material/VisibilityOffOutlined';
import Visibility from '@mui/icons-material/VisibilityOutlined';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import { TextFieldProps } from '@mui/material/TextField';
import { useState } from 'react';
import { Control, FieldValues, Path } from 'react-hook-form';

import Input from './input';

export default function PasswordInput<T extends FieldValues>({
  ...props
}: Omit<TextFieldProps, 'name'> & {
  control: Control;
  EndLabel?: React.ReactNode;
  helperTextHidden?: boolean;
  name?: Path<T>;
}) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="w-full">
      <Input
        {...props}
        slotProps={{
          ...props.slotProps,
          input: {
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  aria-label="Toggle password visibility"
                  edge="end"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          },
        }}
        placeholder={props.placeholder || 'Password'}
        type={showPassword ? 'text' : 'password'}
      />
    </div>
  );
}
