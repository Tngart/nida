import { ArrowForward } from '@mui/icons-material';
import { Box, Button, Typography } from '@mui/material';
import { useTranslations } from 'next-intl';
import React from 'react';

const Main = () => {
  const t = useTranslations('Homepage.Main');
  return (
    <div className="flex h-[80svh] flex-row items-center justify-center">
      <div className="absolute inset-0 -z-10">
        <img src="/web-bg.png" alt="background" className="h-[80svh] w-full object-cover" />
      </div>
      <Box className="flex w-full flex-col gap-4">
        <Typography variant="h3" fontWeight={'bold'} color="text.primary">
          {t('title')}
        </Typography>
        <Typography variant="subtitle2" fontWeight={'medium'} color="text.primary">
          {t('description')}
        </Typography>
        <Button variant="contained" color="primary" endIcon={<ArrowForward />} sx={{ width: '130px' }} href="/explore">
          <Typography variant="body1" fontWeight={'bold'}>
            {t('button')}
          </Typography>
        </Button>
      </Box>
    </div>
  );
};

export default Main;
