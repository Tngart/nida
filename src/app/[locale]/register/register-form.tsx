'use client';

import {
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  Typography,
  Grid,
  DialogActions,
  Divider,
  Snackbar,
  Paper,
} from '@mui/material';
import { parsePhoneNumberFromString } from 'libphonenumber-js/mobile';
import dynamic from 'next/dynamic';
import { FieldValues, useForm } from 'react-hook-form';
import { Position, RegisterPayload } from '@/types/account';
import PositionSelect from '@/components/position-select';
import { registerAccount } from '@/service/account';
import { CancelRounded } from '@mui/icons-material';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const Input = dynamic(() => import('@/components/input'));
const PrefixSelect = dynamic(() => import('@/components/prefix-select'));
const EmailInput = dynamic(() => import('@/components/email-input'));
const PasswordInput = dynamic(() => import('@/components/password-input'));
const PhoneNumberInput = dynamic(() => import('@/components/phone-number-input'));

export default function RegisterForm({ positionList }: { positionList: Position[] }) {
  const router = useRouter();

  const [openNested, setOpenNested] = useState<boolean>(false);
  const [registerSuccess, setRegisterSuccess] = useState<boolean>(false);
  const [snackbarOpen, setSnackbarOpen] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>();

  const {
    control,
    formState: { isValid },
    handleSubmit,
    watch,
    register,
  } = useForm<FieldValues>({ mode: 'all' });
  const prefix = register('prefix', {
    value: 'นาย',
    minLength: 1,
    required: true,
  });
  const firstname = register('firstname', {
    value: '',
    minLength: 1,
    required: true,
  });
  const lastname = register('lastname', {
    value: '',
    minLength: 1,
    required: true,
  });
  const position = register('position', {
    value: '1',
    required: true,
  });
  const userCode = register('userCode', {
    value: '',
    required: watch('position') && watch('position') !== '1',
  });
  const email = register('email', {
    value: '',
    required: true,
    validate: () => true,
  });
  const phone = register('phone', {
    value: '',
    required: true,
    pattern: {
      value: /^0[689]\d{8}$/,
      message: 'Phone Number must be valid',
    },
  });
  const password = register('password', {
    value: '',
    required: { value: true, message: 'enter password' },
    pattern: {
      value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])/,
      message: 'Password must be contained with lower case, upper case and number',
    },
  });
  const confirmPassword = register('confirmPassword', {
    value: '',
    required: { value: true, message: 'enter password' },
    validate: (value) => {
      if (value !== watch('password')) {
        return 'Passwords do not match';
      }
      return true;
    },
  });

  const onSubmit = async ({ prefix, firstname, lastname, email, phone, password, position, userCode }: FieldValues) => {
    try {
      const data = await registerAccount({
        title: prefix,
        firstname,
        lastname,
        email,
        tel: phone,
        password,
        position,
        userCode,
      } as RegisterPayload);
      console.log({ data });
      console.log(data.code);

      if (data.code !== 200) {
        setErrorMessage(data.message);
      } else {
        setErrorMessage(undefined);
        setRegisterSuccess(true);
      }
      setOpenNested(false);
      setSnackbarOpen(true);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      {!registerSuccess ? (
        <Dialog
          open
          fullScreen
          className="mx-auto py-2 lg:w-[1150px] lg:p-20"
          slotProps={{
            paper: {
              sx: {
                borderRadius: 4,
                m: 2,
              },
            },
            backdrop: {
              sx: {
                backgroundColor: 'rgba(0, 0, 0, 0.8)',
              },
            },
          }}
        >
          <div className="flex flex-col lg:flex-row">
            <div className="flex flex-col p-4 lg:w-1/2 lg:justify-center">
              <DialogTitle className="flex flex-row justify-between">
                <Grid className="flex flex-col">
                  <Typography variant="h5">Register</Typography>
                  <Grid className="flex flex-row gap-2">
                    <Typography>already have account?</Typography>
                    <Typography color="primary">login</Typography>
                  </Grid>
                </Grid>
              </DialogTitle>
              <DialogContent className="space-y-2">
                <PrefixSelect control={control} name={prefix.name} />
                <Input control={control} name={firstname.name} placeholder={'First Name'} />
                <Input control={control} name={lastname.name} placeholder={'Last Name'} />
                <PositionSelect control={control} name={position.name} positions={positionList} />
                {watch('position') && watch('position') !== '1' && (
                  <Input control={control} name={userCode.name} placeholder={'User Code'} />
                )}
                <EmailInput control={control} name={email.name} />
                <PhoneNumberInput control={control} name={phone.name} />
                <PasswordInput autoComplete="current-password" control={control} name={password.name} />
                <PasswordInput control={control} name={confirmPassword.name} placeholder="Confirm Password" />
                <Button fullWidth variant="contained" onClick={() => setOpenNested(true)} disabled={!isValid}>
                  <Typography>Register</Typography>
                </Button>
              </DialogContent>
            </div>
            <div className="w-full lg:w-1/2">
              <Image
                alt="register"
                src="/register-bg.svg"
                width={0}
                height={0}
                priority
                style={{ height: 'auto', width: '100%' }}
              />
            </div>
            <Grid className="absolute right-4 top-4">
              <Button onClick={() => router.push('/')}>
                <CancelRounded fontSize="large" />
              </Button>
            </Grid>
          </div>
        </Dialog>
      ) : (
        <Dialog
          open
          fullScreen
          className="mx-auto py-2 lg:w-[1150px] lg:p-20"
          slotProps={{
            paper: {
              sx: {
                borderRadius: 4,
                m: 2,
              },
            },
            backdrop: {
              sx: {
                backgroundColor: 'rgba(0, 0, 0, 0.8)',
              },
            },
          }}
        >
          <div className="flex flex-col lg:flex-row">
            <div className="flex flex-col gap-10 p-4 text-center lg:w-1/2 lg:justify-center">
              <Grid className="flex flex-row">
                <Grid className="flex w-full flex-col">
                  <Typography variant="h5">Register Success</Typography>
                  <Typography variant="subtitle1">Please check your email to validate your account</Typography>
                </Grid>
              </Grid>
              <Grid>
                <Button className="w-full px-10" variant="contained">
                  Back to Login
                </Button>
              </Grid>
            </div>
            <div className="w-full lg:w-1/2">
              <Image
                alt="register"
                src="/register-bg.svg"
                width={0}
                height={0}
                priority
                style={{ height: 'auto', width: '100%' }}
              />
            </div>
            <Grid className="absolute right-4 top-4">
              <Button onClick={() => router.push('/')}>
                <CancelRounded fontSize="large" />
              </Button>
            </Grid>
          </div>
        </Dialog>
      )}

      <Snackbar
        open={snackbarOpen}
        onClose={() => {
          setSnackbarOpen(false);
        }}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        autoHideDuration={5_000}
      >
        <Paper className="w-[400px] p-4">
          <Typography variant="subtitle1">{errorMessage ? 'Warning' : 'Success'}</Typography>
          <Typography variant="subtitle2">{errorMessage || 'Register Success'}</Typography>
        </Paper>
      </Snackbar>

      <Dialog className="px-10 text-center" fullWidth open={openNested} onClose={() => setOpenNested(false)}>
        <DialogTitle> Confirm Registration</DialogTitle>
        <Divider />
        <DialogContent>Confirm Processing</DialogContent>
        <DialogActions
          className="gap-4"
          sx={{
            justifyContent: 'center',
          }}
        >
          <Button variant="contained" onClick={() => setOpenNested(false)}>
            Cancel
          </Button>
          <Button variant="contained" onClick={handleSubmit(onSubmit)}>
            Confirm
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
