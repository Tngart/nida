import dynamic from 'next/dynamic';
import React from 'react';

import { fetchHome } from '@/service/home';

const FreeRegistrationComponent = dynamic(() => import('@/components/homepage/registration'));
const MainComponent = dynamic(() => import('@/components/homepage/main'));
const NewsComponent = dynamic(() => import('@/components/homepage/news'));
const RecommendComponent = dynamic(() => import('@/components/homepage/recommend'));

const HomePage = async () => {
  const homeList = await fetchHome();
  return (
    <>
      <MainComponent />
      <div className="flex flex-col items-center justify-center gap-8 py-12">
        <NewsComponent newsList={homeList.news} />
        <FreeRegistrationComponent />
      </div>
      <RecommendComponent courses={homeList.course} />
    </>
  );
};

export default HomePage;
