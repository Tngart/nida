'use client';
import { AccessTimeFilled } from '@mui/icons-material';
import { Paper, Typography } from '@mui/material';
import { useParams } from 'next/navigation';
import { useTranslations } from 'next-intl';
import React, { FC } from 'react';

import { CourseData } from '@/types/course';
import { FormatDate } from '@/utils/formatDate';

interface IProps {
  data: CourseData;
}

const ClassesComponent: FC<IProps> = ({ data }) => {
  const { locale } = useParams();
  const t = useTranslations('Course.Detail.Class');
  const currentLocal = locale as string;

  const CourseBenefits = [
    {
      img: '/open-class.png',
      title: t('open'),
      description: (
        <Typography color="textPrimary" variant="body1" fontWeight={'medium'} className="flex flex-row gap-2">
          <AccessTimeFilled color="action" sx={{ fontSize: '16px' }} />
          {`${FormatDate(data.registerStartDate, currentLocal)}`}
        </Typography>
      ),
    },
    {
      img: '/end-class.png',
      title: t('end'),
      description: (
        <Typography color="textPrimary" variant="body1" fontWeight={'medium'} className="flex flex-row gap-2">
          <AccessTimeFilled color="action" sx={{ fontSize: '16px' }} />
          {`${FormatDate(data.registerEndDate, currentLocal)}`}
        </Typography>
      ),
    },
    {
      img: '/total-hours.png',
      title: t('total.title'),
      description: (
        <Typography color="textPrimary" variant="body1" fontWeight={'medium'} className="flex flex-row gap-2">
          <AccessTimeFilled color="action" sx={{ fontSize: '16px' }} />
          {t('total.description', { hours: 10 })}
        </Typography>
      ),
    },
    {
      img: '/certificate.png',
      title: t('certificate.title'),
      description: (
        <Typography color="textPrimary" variant="body1" fontWeight={'medium'} className="flex flex-row gap-2">
          {t('certificate.description')}
        </Typography>
      ),
    },
  ];

  return (
    <>
      <div className="relative left-1/2 right-1/2 -mx-[50vw] w-screen bg-[#eeeeee] px-12 py-[35px]">
        <div className="mx-auto max-w-[1280px]">
          <div className="grid grid-cols-1 items-start gap-6 md:grid-cols-2 lg:grid-cols-4">
            {CourseBenefits.map((item, index) => (
              <Paper key={index} elevation={2} className="flex items-start gap-4 p-4">
                <img src={item.img} alt={item.title} className="w-10 shrink-0" />
                <div>
                  <Typography color="primary" variant="h6" fontWeight="bold" className="mb-1">
                    {item.title}
                  </Typography>
                  <Typography variant="body2">{item.description}</Typography>
                </div>
              </Paper>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ClassesComponent;
