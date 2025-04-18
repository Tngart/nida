import { CancelRounded } from '@mui/icons-material';
import { Button, Dialog, Grid, Typography } from '@mui/material';
import { useTranslations } from 'next-intl';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useCallback } from 'react';
import { useForm, FieldValues } from 'react-hook-form';

import { forgotPassword } from '@/service/user';

const EmailInput = dynamic(() => import('@/components/email-input'));

export default function ForgotPasswordFormDialog({
  setErrorMessage,
  setSnackbarOpen,
}: {
  setErrorMessage: (val?: string) => void;
  setSnackbarOpen: (val: boolean) => void;
}) {
  const router = useRouter();
  const t = useTranslations('ForgotPassword');

  const {
    control,
    register,
    formState: { isValid },
    handleSubmit,
  } = useForm<FieldValues>({ mode: 'all' });
  const email = register('email', {
    value: '',
    required: true,
    validate: () => true,
  });

  const onSubmit = useCallback(
    async ({ email }: FieldValues) => {
      try {
        const data = await forgotPassword({
          username: email,
        });

        if (data.code !== 200) {
          setErrorMessage(data.message);
        } else {
          setErrorMessage(undefined);
        }
        setSnackbarOpen(true);
      } catch (error) {
        console.error(error);
      }
    },
    [setErrorMessage, setSnackbarOpen]
  );

  return (
    <Dialog
      open
      fullScreen
      className="m-auto py-2 lg:h-[620px] lg:w-[1000px] lg:p-20"
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
        <div className="flex flex-col gap-4 p-4 px-20 lg:w-1/2 lg:justify-center lg:p-20">
          <Grid className="flex flex-col gap-0">
            <Typography variant="h5" fontWeight="bold">
              {t('title')}
            </Typography>
            <Typography variant="subtitle1">{t('subtitle')}</Typography>
          </Grid>
          <EmailInput control={control} name={email.name} placeholder={t('form.username')} />
          <Button variant="contained" disabled={!isValid} onClick={handleSubmit(onSubmit)}>
            {t('send')}
          </Button>
        </div>
        <div className="w-full lg:w-1/2">
          <Image
            alt="register"
            src="/sign-in-bg.svg"
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
  );
}
