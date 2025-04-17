import { Paper, Snackbar, Typography } from '@mui/material';
import { useTranslations } from 'next-intl';

export default function SnackkbarAlert({
  snackbarOpen,
  setSnackbarOpen,
  successMessage,
  errorMessage,
}: {
  snackbarOpen: boolean;
  setSnackbarOpen: (val: boolean) => void;
  successMessage: string;
  errorMessage?: string;
}) {
  const t = useTranslations('Alert.snackbar');

  return (
    <Snackbar
      open={snackbarOpen}
      onClose={() => {
        setSnackbarOpen(false);
      }}
      anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      autoHideDuration={5_000}
    >
      <Paper className="w-[400px] p-4">
        <Typography variant="subtitle1">{errorMessage ? t('warning') : t('success')}</Typography>
        <Typography variant="subtitle2">{errorMessage || successMessage}</Typography>
      </Paper>
    </Snackbar>
  );
}
