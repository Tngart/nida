import FreeRegistration from '@/components/homepage/registration';
import { fetchHome } from '@/service/home';
import dynamic from 'next/dynamic';
import React from 'react';

const NewsComponent = dynamic(() => import('@/components/homepage/news'));

const HomePage = async () => {
  const newsList = await fetchHome();
  return (
    <div className="flex flex-col items-center justify-center gap-8 p-40">
      <NewsComponent newsList={newsList.news} />
      <FreeRegistration />
    </div>
  );
};

export default HomePage;
