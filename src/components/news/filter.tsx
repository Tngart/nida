'use client';

import { NewsListPayload } from '@/types/news';
import { Search } from '@mui/icons-material';
import { Button, TextField, Typography } from '@mui/material';
import { useTranslations } from 'next-intl';
import React, { FC, useState } from 'react';

interface IProps {
  onSubmit: (payload: NewsListPayload) => void;
}

const FilterNewsComponent: FC<IProps> = ({ onSubmit }) => {
  const t = useTranslations('News.Filter');
  const [keyword, setKeyword] = useState<string>();

  const handleSubmit = (event?: React.FormEvent<HTMLFormElement>) => {
    event?.preventDefault();
    onSubmit({ max: 10, offset: 0, keyword });
  };

  return (
    <div className="bg-[#1d1d21] px-4 py-[40px] xl:px-48">
      <form onSubmit={handleSubmit} className="flex flex-col justify-between gap-4 pt-[80px] md:flex-row">
        <Typography variant="h4" fontWeight="bold" color="primary.contrastText">
          {t('title')}
        </Typography>
        <div className="flex w-full gap-2 md:w-1/2">
          <TextField
            fullWidth
            placeholder={t('placeholder')}
            variant="outlined"
            onChange={(event) => setKeyword(event.target.value)}
            slotProps={{
              input: {
                endAdornment: (
                  <Button type="submit" startIcon={<Search />} variant="contained">
                    {t('button')}
                  </Button>
                ),
              },
            }}
          />
        </div>
      </form>
    </div>
  );
};

export default FilterNewsComponent;
