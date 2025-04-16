import { fetchNews } from '@/service/news';
import dynamic from 'next/dynamic';
import React from 'react';

const FilterComponent = dynamic(() => import('@/components/news/filter'));
const ContentComponent = dynamic(() => import('@/components/news/content'));

const NewsPage = async () => {
  const newsList = await fetchNews({ max: 10, offset: 0 });
  return (
    <>
      <FilterComponent />
      <ContentComponent newsList={newsList.news} />
    </>
  );
};

export default NewsPage;
