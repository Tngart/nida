import dynamic from 'next/dynamic';
import { ReactNode } from 'react';

const Alert = dynamic(() => import('@mui/material/Alert'));

export default function ErrorAlert({ message }: { message?: string | ReactNode }) {
  return (
    message && (
      <Alert className="w-full overflow-hidden" severity="error" variant="filled">
        <div className="text-ellipsis overflow-hidden">{message}</div>
      </Alert>
    )
  );
}
