import { ArrowForward, ArrowRightAlt } from '@mui/icons-material';
import { Box, Button, Paper, Typography } from '@mui/material';
import { useTranslations } from 'next-intl';
import React from 'react';

const Main = () => {
  const t = useTranslations('Homepage.Main');
  return (
    <div className="flex h-[600px] w-full flex-row items-center justify-center">
      <Box className="flex w-[80%] flex-col gap-4 pl-4 md:pl-48">
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
      <div
        className="bg-primary-main flex h-full w-full"
        style={{
          clipPath: 'polygon(0 100%, 25% 0, 100% 0, 100% 100%)',
        }}
      />
    </div>
  );
};

export default Main;
