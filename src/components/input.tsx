import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import FormLabel from '@mui/material/FormLabel';
import TextField, { TextFieldProps } from '@mui/material/TextField';
import { Controller, FieldValues, FormProps, Path } from 'react-hook-form';

export default function Input<T extends FieldValues>({
  control,
  helperText,
  name,
  ...props
}: Omit<TextFieldProps, 'name'> &
  Pick<FormProps<T>, 'control'> & {
    helperTextHidden?: boolean;
    name?: Path<T>;
    EndLabel?: React.ReactNode;
  }) {
  return control && name ? (
    <Controller
      control={control}
      name={name}
      render={({ field: { ref, ...field }, fieldState: { error, isTouched } }) => (
        <UncontrolledInput
          {...props}
          {...field}
          error={Boolean(error) && isTouched}
          helperText={error?.message || helperText}
          inputRef={ref}
        />
      )}
    />
  ) : (
    <UncontrolledInput {...props} helperText={helperText} />
  );
}

function UncontrolledInput({
  error,
  helperText,
  helperTextHidden,
  inputRef,
  EndLabel,
  ...props
}: TextFieldProps & {
  helperTextHidden?: boolean;
  EndLabel?: React.ReactNode;
}) {
  return (
    <div className="pt-1">
      <FormControl fullWidth>
        <FormLabel
          sx={{
            backgroundColor: 'background.default',
            padding: '0 6px',
            right: 0,
            position: 'absolute',
            transform: 'translate(10px, -12px) scale(0.75)',
            zIndex: 100,
          }}
        >
          {EndLabel}
        </FormLabel>
        <TextField
          {...props}
          inputRef={inputRef}
          error={error}
          fullWidth
          sx={(theme) => ({
            '& .Mui-focused .MuiInputAdornment-root': {
              color: theme.palette.primary.main,
            },
            '& .Mui-error .MuiInputAdornment-root': {
              color: theme.palette.error.main,
            },
          })}
        />
        {helperText && (
          <FormHelperText error={error} hidden={helperTextHidden}>
            {helperText}
          </FormHelperText>
        )}
      </FormControl>
    </div>
  );
}
