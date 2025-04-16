import dynamic from 'next/dynamic';
import React, { FC } from 'react';
import { Button, Typography } from '@mui/material';
import { useTranslations } from 'next-intl';
import { News } from '@/types/home';

const NewsCard = dynamic(() => import('@/components/homepage/news-card'));
interface NewsProps {
  newsList: News[];
}

const NewsComponent: FC<NewsProps> = ({ newsList }) => {
  const t = useTranslations('Homepage.News');
  return (
    <>
      <div className="flex flex-col items-center justify-center gap-4">
        <Typography variant="h4" fontWeight={'bold'}>
          {t('title')}
        </Typography>
        <Typography variant="subtitle1">{t('subtitle')}</Typography>
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
        {newsList.map((data) => (
          <NewsCard key={data.id} data={data} />
        ))}
      </div>
      <Button href="/news" variant="outlined" size="large">
        {t('button')}
      </Button>
    </>
  );
};

export default NewsComponent;
