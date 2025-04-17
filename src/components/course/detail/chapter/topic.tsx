'use client';
import { Image, InsertDriveFile } from '@mui/icons-material';
import { Typography } from '@mui/material';
import { useTranslations } from 'next-intl';
import React, { FC } from 'react';

import { CourseIndexObjectResponse } from '@/types/course-index';

interface IProps {
  data?: CourseIndexObjectResponse;
}

const TopicComponent: FC<IProps> = ({ data }) => {
  const t = useTranslations('Course.Detail.Chapter');

  return (
    <div className="flex flex-col gap-4">
      <Typography variant="subtitle1" fontWeight={'bold'} color="primary">
        {t('title')}
      </Typography>
      <div className="flex flex-row gap-4">
        <Typography
          variant="body1"
          color="text.secondary"
          fontWeight={'medium'}
          className="flex flex-row items-center gap-2"
        >
          <Image fontSize="small" color="inherit" />
          {t('chapter', { count: data?.total || 0 })}
        </Typography>
        <Typography
          variant="body1"
          color="text.secondary"
          fontWeight={'medium'}
          className="flex flex-row items-center gap-2"
        >
          <InsertDriveFile fontSize="small" />
          {t('material', { count: data?.files?.length || 0 })}
        </Typography>
      </div>
    </div>
  );
};

export default TopicComponent;
