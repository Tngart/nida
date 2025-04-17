'use client';

import dynamic from 'next/dynamic';
import { useState } from 'react';

const LoginFormDialog = dynamic(() => import('@/components/login/dialog-form'));
const SnackbarAlert = dynamic(() => import('@/components/snackbar-alert'));

export default function LoginPage() {
  const [erroreMessage, setErrorMessage] = useState<string>();
  const [snackbarOpen, setSnackbarOpen] = useState<boolean>(false);

  return (
    <div>
      <LoginFormDialog setErrorMessage={setErrorMessage} setSnackbarOpen={setSnackbarOpen} />

      <SnackbarAlert
        snackbarOpen={snackbarOpen}
        setSnackbarOpen={setSnackbarOpen}
        successMessage="Login Success"
        errorMessage={erroreMessage}
      />
    </div>
  );
}
