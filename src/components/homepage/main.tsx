import { ArrowForward, ArrowRightAlt } from '@mui/icons-material';
import { Box, Button, Paper, Typography } from '@mui/material';
import { useTranslations } from 'next-intl';
import React from 'react';

const Main = () => {
  const t = useTranslations('Homepage.Main');
  return (
    <>
      <div className="flex h-[80svh] w-full flex-row items-center justify-center">
        <Box className="flex w-full flex-col gap-4">
          <Typography variant="h3" fontWeight={'bold'} color="text.primary">
            {t('title')}
          </Typography>
          <Typography variant="subtitle2" fontWeight={'medium'} color="text.primary">
            {t('description')}
          </Typography>
          <Button
            variant="contained"
            color="primary"
            endIcon={<ArrowForward />}
            sx={{ width: '130px' }}
            href="/explore"
          >
            <Typography variant="body1" fontWeight={'bold'}>
              {t('button')}
            </Typography>
          </Button>
        </Box>
      </div>
      <div
        className="absolute right-0 top-0 z-0 h-[80svh] w-1/2 bg-primary-main"
        style={{
          clipPath: 'polygon(0 100%, 25% 0, 100% 0, 100% 100%)',
        }}
      />
    </>
  );
};

export default Main;
