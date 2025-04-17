'use client';

import dynamic from 'next/dynamic';
import { useState } from 'react';

const ForgotPsswordFormDialog = dynamic(() => import('@/components/forgot-password/dialog-form'));
const SnackbarAlert = dynamic(() => import('@/components/snackbar-alert'));

export default function ForgotPasswordPage() {
  const [erroreMessage, setErrorMessage] = useState<string>();
  const [snackbarOpen, setSnackbarOpen] = useState<boolean>(false);

  return (
    <div>
      <ForgotPsswordFormDialog setErrorMessage={setErrorMessage} setSnackbarOpen={setSnackbarOpen} />

      <SnackbarAlert
        snackbarOpen={snackbarOpen}
        setSnackbarOpen={setSnackbarOpen}
        successMessage="Login Success"
        errorMessage={erroreMessage}
      />
    </div>
  );
}
