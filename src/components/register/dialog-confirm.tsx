import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Divider } from '@mui/material';
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
  return (
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
  );
}
