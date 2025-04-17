'use client';
import { ArrowForward } from '@mui/icons-material';
import { alpha, Box, Button, Typography, useTheme } from '@mui/material';
import { useTranslations } from 'next-intl';
import React from 'react';

const Registration = () => {
  const t = useTranslations('Homepage.Registration');
  const theme = useTheme();
  return (
    <Box className="relative flex h-[175px] w-full flex-col items-center justify-center gap-4 rounded-2xl">
      <div className="absolute inset-0 -z-10">
        <div
          className="absolute inset-0 rounded-2xl"
          style={{ backgroundColor: alpha(theme.palette.primary.main, 0.9) }}
        />
        <img src="/subscribe-bg.png" alt="background" className="h-[175px] w-full rounded-2xl object-cover" />
      </div>
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
