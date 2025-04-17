import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Divider } from '@mui/material';
import { useTranslations } from 'next-intl';
import { FieldValues } from 'react-hook-form';

export default function ConfirmRegistrationDialog({
  openNested,
  setOpenNested,
  handleSubmit,
  onSubmit,
}: {
  openNested: boolean;
  setOpenNested: (val: boolean) => void;
  handleSubmit: (onValid: (data: FieldValues) => void) => (e?: React.BaseSyntheticEvent) => void;
  onSubmit: (data: FieldValues) => void;
}) {
  const t = useTranslations('Register.confirm');

  return (
    <Dialog className="px-10 text-center" fullWidth open={openNested} onClose={() => setOpenNested(false)}>
      <DialogTitle>{t('title')}</DialogTitle>
      <Divider />
      <DialogContent>{t('subtitle')}</DialogContent>
      <DialogActions
        className="gap-4"
        sx={{
          justifyContent: 'center',
        }}
      >
        <Button variant="contained" onClick={() => setOpenNested(false)}>
          {t('cancel')}
        </Button>
        <Button variant="contained" onClick={handleSubmit(onSubmit)}>
          {t('confirm')}
        </Button>
      </DialogActions>
    </Dialog>
  );
}
