import { ArrowForward, ArrowRightAlt } from '@mui/icons-material';
import { Box, Button, Paper, Typography } from '@mui/material';
import { useTranslations } from 'next-intl';
import React from 'react';

const Registration = () => {
  const t = useTranslations('Homepage.Registration');
  return (
    <Box className="bg-primary-main flex h-[175px] w-full flex-col items-center justify-center gap-4 rounded-2xl">
      <Typography variant="h4" fontWeight={'bold'} color="primary.contrastText">
        {t('title')}
      </Typography>
      <Typography variant="body1" fontWeight={'medium'} color="primary.contrastText">
        {t('description')}
      </Typography>
      <Button variant="contained" color="info" endIcon={<ArrowForward />} href="/register">
        <Typography variant="body1" fontWeight={'bold'}>
          {t('button')}
        </Typography>
      </Button>
    </Box>
  );
};

export default Registration;
