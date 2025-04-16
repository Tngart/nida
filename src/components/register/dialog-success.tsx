import { CancelRounded } from '@mui/icons-material';
import { Button, Dialog, Grid, Typography } from '@mui/material';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function RegistrationSuccessDialog() {
  const router = useRouter();

  return (
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
  );
}
