import { fetchNews } from '@/service/news';
import dynamic from 'next/dynamic';
import React from 'react';

const NewListComponent = dynamic(() => import('@/components/news'));

const NewsPage = async () => {
  const newsList = await fetchNews({ max: 10, offset: 0 });
  return <NewListComponent newsList={newsList.news}></NewListComponent>;
};

export default NewsPage;
