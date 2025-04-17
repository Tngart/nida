'use client';

import dynamic from 'next/dynamic';
import { FieldValues, useForm } from 'react-hook-form';
import { Position, RegisterPayload } from '@/types/account';
import { registerAccount } from '@/service/account';
import { useCallback, useState } from 'react';

const RegistrationFormDialog = dynamic(() => import('@/components/register/dialog-form'));
const RegistrationSuccessDialog = dynamic(() => import('@/components/register/dialog-success'));
const SnackbarAlert = dynamic(() => import('@/components/snackbar-alert'));
const ConfirmRegistrationDialog = dynamic(() => import('@/components/register/dialog-confirm'));

export default function RegisterForm({ positionList }: { positionList: Position[] }) {
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

  const onSubmit = useCallback(
    async ({ prefix, firstname, lastname, email, phone, password, position, userCode }: FieldValues) => {
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
    },
    [registerAccount, setErrorMessage, setRegisterSuccess, setOpenNested, setSnackbarOpen]
  );

  return (
    <div>
      {!registerSuccess ? (
        <RegistrationFormDialog
          control={control}
          watch={watch}
          register={register}
          isValid={isValid}
          positionList={positionList}
          setOpenNested={setOpenNested}
        />
      ) : (
        <RegistrationSuccessDialog />
      )}

      <SnackbarAlert
        snackbarOpen={snackbarOpen}
        setSnackbarOpen={setSnackbarOpen}
        successMessage="Register Success"
        errorMessage={errorMessage}
      />

      <ConfirmRegistrationDialog
        openNested={openNested}
        setOpenNested={setOpenNested}
        handleSubmit={handleSubmit}
        onSubmit={onSubmit}
      />
    </div>
  );
}
