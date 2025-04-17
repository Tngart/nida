import { ArrowDropDown } from '@mui/icons-material';
import Autocomplete from '@mui/material/Autocomplete';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import TextField, { TextFieldProps } from '@mui/material/TextField';
import 'flag-icons/css/flag-icons.min.css';
import {
  CountryCode,
  getCountries,
  getCountryCallingCode,
  isSupportedCountry,
  parsePhoneNumberWithError,
} from 'libphonenumber-js/mobile';
// import { useTranslations } from "next-intl";
import { useMemo, useState } from 'react';
import { Control, Controller, FieldValues, Path } from 'react-hook-form';

import { LocalStorage } from '@/providers/local-storage';

export default function PhoneNumberInput<T extends FieldValues>({
  autoFocus,
  control,
  defaultValue = '',
  disabled,
  helperText,
  label,
  name,
  slotProps,
}: TextFieldProps & {
  control: Control;
  defaultValue?: string;
  name: Path<T>;
}) {
  // const t = useTranslations("Country");
  const options = getCountries().sort((a, b) => (a === LocalStorage.defaultCountryCode ? -1 : a.localeCompare(b)));
  const parsePhoneNumber = useMemo(
    () => (inputCountryCode: CountryCode, inputNumber: string) => {
      try {
        const phoneNumber = parsePhoneNumberWithError(inputNumber, {
          defaultCountry: inputCountryCode,
          extract: true,
        });
        if (!phoneNumber.isValid()) throw new Error();

        return {
          countryCode: phoneNumber.country || inputCountryCode,
          number: phoneNumber.formatNational().replace(/ /g, ''),
          standard: phoneNumber.number,
        };
      } catch {
        return {
          countryCode: inputCountryCode,
          number: inputNumber,
          standard: inputNumber && `+${getCountryCallingCode(inputCountryCode)}${inputNumber}`,
        };
      }
    },
    []
  );
  const defaultPhone = parsePhoneNumber(LocalStorage.defaultCountryCode, defaultValue);
  const [countryCode, setCountryCode] = useState<CountryCode>(defaultPhone.countryCode);
  const [number, setNumber] = useState(defaultPhone.number);
  const [open, setOpen] = useState(false);

  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onBlur, onChange }, fieldState }) => (
        <FormControl fullWidth>
          <Autocomplete
            autoHighlight
            clearOnBlur={false}
            disablePortal
            disabled={disabled}
            filterOptions={(countries) => countries}
            forcePopupIcon={false}
            fullWidth
            open={open}
            options={options}
            selectOnFocus={false}
            value={countryCode}
            renderOption={(props, code) => (
              <Box {...props} component="li" key={code}>
                <div className="flex w-full justify-between">
                  <div>
                    <span className={`fi fi-${code !== 'AC' ? code.toLowerCase() : 'sh-ac'} mr-3`} />
                    {'code'}
                  </div>
                  <div>{`+${getCountryCallingCode(code)}`}</div>
                </div>
              </Box>
            )}
            inputValue={number}
            onBlur={onBlur}
            onChange={(_, v, r) => {
              if (disabled) return;

              setOpen(false);

              const c = v && isSupportedCountry(v) ? v : countryCode;
              const n = r === 'clear' ? '' : number;
              const phoneNumber = parsePhoneNumber(c, n);
              setCountryCode(phoneNumber.countryCode);
              setNumber(phoneNumber.number);
              onChange(phoneNumber.number);
              LocalStorage.countryCode = phoneNumber.countryCode;
            }}
            onInputChange={(_, v, r) => {
              if (disabled) return;

              setOpen(false);

              if (r === 'clear' || r === 'reset' || r === 'selectOption') return;
              const phoneNumber = parsePhoneNumber(countryCode, v);
              setCountryCode(phoneNumber.countryCode);
              setNumber(phoneNumber.number);
              onChange(phoneNumber.number);
              LocalStorage.countryCode = phoneNumber.countryCode;
            }}
            renderInput={(params) => (
              <div className="pt-1">
                <TextField
                  {...params}
                  autoFocus={autoFocus}
                  disabled={disabled}
                  error={Boolean(fieldState.error)}
                  fullWidth
                  label={label}
                  sx={{ fontSize: '12px' }}
                  onBlur={() => {
                    setOpen(false);
                    onBlur();
                  }}
                  placeholder="0812345678"
                  slotProps={{
                    ...slotProps,
                    htmlInput: {
                      ...params.inputProps,
                      autoComplete: 'tel tel-national',
                      type: 'tel',
                    },
                    input: {
                      ...params.InputProps,
                      ...slotProps?.input,
                      startAdornment: (
                        <>
                          <InputAdornment position="start" className={disabled ? '' : 'cursor-pointer'}>
                            <div className="w-20 pl-1.5" onClick={() => !disabled && setOpen(!open)}>
                              <span
                                className={`fi fi-${countryCode !== 'AC' ? countryCode.toLowerCase() : 'sh-ac'} mr-3`}
                              />
                              {`+${getCountryCallingCode(countryCode || LocalStorage.defaultCountryCode)}`}
                            </div>
                            <IconButton
                              aria-label="Open country code"
                              disabled={disabled}
                              onClick={() => setOpen(!open)}
                            >
                              <ArrowDropDown className={open ? 'rotate-180' : ''} />
                            </IconButton>
                          </InputAdornment>
                          <Divider sx={{ height: '2rem', mr: 2 }} orientation="vertical" />
                        </>
                      ),
                    },
                  }}
                />
              </div>
            )}
          />

          {fieldState.error?.message ||
            (helperText && (
              <FormHelperText error={Boolean(fieldState.error)}>
                {fieldState.error?.message || helperText}
              </FormHelperText>
            ))}
        </FormControl>
      )}
    />
  );
}
