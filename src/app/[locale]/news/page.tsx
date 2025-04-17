import dynamic from 'next/dynamic';
import React from 'react';

import { fetchNews } from '@/service/news';

const NewsComponent = dynamic(() => import('@/components/news'));

const NewsPage = async () => {
  const newsList = await fetchNews({ max: 10, offset: 0 });
  return <NewsComponent newsList={newsList.news} />;
};

export default NewsPage;
