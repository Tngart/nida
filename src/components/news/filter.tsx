import { Search } from '@mui/icons-material';
import { Button, TextField, Typography } from '@mui/material';
import { useTranslations } from 'next-intl';
import React from 'react';

const FilterNewsComponent = () => {
  const t = useTranslations('News.Filter');
  return (
    <div className="bg-[#1d1d21] px-48 py-[40px]">
      <div className="flex flex-row justify-between pt-[80px]">
        <Typography variant="h4" fontWeight={'bold'} color="primary.contrastText">
          {t('title')}
        </Typography>
        <TextField
          className="w-1/2"
          placeholder={t('placeholder')}
          variant="outlined"
          slotProps={{
            input: {
              endAdornment: (
                <Button startIcon={<Search />} variant="contained">
                  {t('button')}
                </Button>
              ),
            },
          }}
        ></TextField>
      </div>
    </div>
  );
};

export default FilterNewsComponent;
