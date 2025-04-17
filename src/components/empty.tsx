import { Typography } from '@mui/material';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import React from 'react';

const Empty = () => {
  const t = useTranslations('Empty');
  return (
    <div className="flex flex-col items-center gap-4 p-8">
      <Image src="/empty.png" alt="empty" width={250} height={250} />
      <Typography variant="subtitle2" color="text.secondary">
        {t('description')}
      </Typography>
    </div>
  );
};

export default Empty;
