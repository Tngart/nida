import Main from '@/components/homepage/main';
import FreeRegistration from '@/components/homepage/registration';
import { fetchHome } from '@/service/home';
import dynamic from 'next/dynamic';
import React from 'react';

const NewsComponent = dynamic(() => import('@/components/homepage/news'));

const HomePage = async () => {
  const newsList = await fetchHome();
  return (
    <div>
      <Main />
      <div className="flex flex-col items-center justify-center gap-8 px-48 py-12">
        <NewsComponent newsList={newsList.news} />
        <FreeRegistration />
      </div>
    </div>
  );
};

export default HomePage;
