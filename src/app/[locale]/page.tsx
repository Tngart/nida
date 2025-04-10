import { fetchHome } from '@/service/home';
import dynamic from 'next/dynamic';
import React from 'react';

const NewsComponent = dynamic(() => import('@/components/homepage/news'));

const HomePage = async () => {
  const newsList = await fetchHome();
  return <NewsComponent newsList={newsList.news} />;
};

export default HomePage;
