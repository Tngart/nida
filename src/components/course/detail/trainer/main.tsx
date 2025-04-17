'use client';
import { Avatar, Typography } from '@mui/material';
import { useTranslations } from 'next-intl';
import React, { FC } from 'react';

import { CourseData } from '@/types/course';

interface IProps {
  data: CourseData;
}

const MainTrainerComponent: FC<IProps> = ({ data }) => {
  const t = useTranslations('Course.Detail.Trainer');

  return (
    <div className="flex w-3/5 flex-row items-center gap-4 align-middle">
      <Avatar
        src={data.trainer.profileImageUrl}
        sx={{ width: 150, height: 150, borderWidth: '4px', borderColor: 'text.secondary' }}
      />
      <div className="flex flex-col justify-center">
        <Typography variant="subtitle1" fontWeight={'bold'}>
          {t('main')}
        </Typography>
        <Typography variant="h6" fontWeight={'bold'}>
          {data.trainer.name}
        </Typography>
        <Typography variant="body1" fontWeight={'bold'}>
          {data.trainer.career}
        </Typography>
      </div>
    </div>
  );
};

export default MainTrainerComponent;
