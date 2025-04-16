import { fetchHome } from '@/service/home';
import dynamic from 'next/dynamic';
import React from 'react';

const FreeRegistrationComponent = dynamic(() => import('@/components/homepage/registration'));
const MainComponent = dynamic(() => import('@/components/homepage/main'));
const NewsComponent = dynamic(() => import('@/components/homepage/news'));
const RecommendComponent = dynamic(() => import('@/components/homepage/recommend'));

const HomePage = async () => {
  const homeList = await fetchHome();
  return (
    <div>
      <MainComponent />
      <div className="flex flex-col items-center justify-center gap-8 px-4 py-12 md:px-48">
        <NewsComponent newsList={homeList.news} />
        <FreeRegistrationComponent />
      </div>
      <RecommendComponent courses={homeList.course} />
    </div>
  );
};

export default HomePage;
