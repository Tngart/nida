import { Paper, Snackbar, Typography } from '@mui/material';

export default function RegistrationAlert({
  snackbarOpen,
  setSnackbarOpen,
  errorMessage,
}: {
  snackbarOpen: boolean;
  setSnackbarOpen: (val: boolean) => void;
  errorMessage?: string;
}) {
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
        <Typography variant="subtitle1">{errorMessage ? 'Warning' : 'Success'}</Typography>
        <Typography variant="subtitle2">{errorMessage || 'Register Success'}</Typography>
      </Paper>
    </Snackbar>
  );
}
