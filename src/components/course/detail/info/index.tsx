'use client';
import { AccessTimeFilled, ChevronLeft } from '@mui/icons-material';
import { Button, Card, CardContent, CardMedia, Chip, Divider, Rating, Typography } from '@mui/material';
import { useParams } from 'next/navigation';
import { useTranslations } from 'next-intl';
import React, { FC } from 'react';

import { CourseData } from '@/types/course';
import { FormatDate } from '@/utils/formatDate';

interface IProps {
  data: CourseData;
}

const InfoComponent: FC<IProps> = ({ data }) => {
  const { locale } = useParams();
  const t = useTranslations('Course.Detail');
  const currentLocal = locale as string;

  return (
    <>
      <div className="absolute left-1/2 top-0 -z-30 h-[665px] w-screen -translate-x-1/2 bg-[#1d1d21] md:h-[615px]" />
      <div className="h-[665px] md:h-[615px]">
        <div className="pt-[120px]">
          <Button startIcon={<ChevronLeft />} sx={{ color: 'white' }}>
            <Typography fontWeight={'bold'} variant="body1">
              {t('back')}
            </Typography>
          </Button>
          <div className="flex flex-row justify-between p-8 pt-12">
            <div className="flex flex-col gap-4">
              <Chip sx={{ height: '50px', width: '100px', overflow: 'auto' }} color="info" label={data.category.name} />
              <div>
                <Typography variant="subtitle1" fontWeight="bold" color="white">
                  {data.code}
                </Typography>
                <Typography variant="subtitle1" fontWeight="bold" color="primary">
                  {data.name}
                </Typography>
              </div>
              <div className="flex flex-row items-center gap-2 align-middle">
                <Rating
                  readOnly
                  name="rating"
                  defaultValue={data.avgRating}
                  precision={5}
                  sx={{
                    '& .MuiRating-icon': {
                      marginRight: '12px',
                    },
                  }}
                />
                <Typography color="white" fontWeight={'bold'}>
                  {data.avgRating}
                </Typography>
                <Typography color="white" fontWeight={'bold'}>
                  ({data.reviewCount} review)
                </Typography>
              </div>
            </div>
            <Card sx={{ width: '455px', height: '371px' }}>
              <CardContent className="flex flex-col gap-4 p-2">
                <CardMedia
                  component="img"
                  width={'100%'}
                  height={'100%'}
                  image={data.courseImageUrl}
                  alt={data.id.toString()}
                  loading="lazy"
                />
                <Divider />
                <Button variant="contained">{t('enroll')}</Button>
                <Typography
                  color="textPrimary"
                  variant="body1"
                  fontWeight={'medium'}
                  className="flex flex-row items-center justify-center gap-2"
                >
                  <AccessTimeFilled color="action" sx={{ fontSize: '16px' }} />
                  {`${FormatDate(data.registerStartDate, currentLocal)} - ${FormatDate(data.registerEndDate, currentLocal)}`}
                </Typography>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
};

export default InfoComponent;
