import Main from '@/components/homepage/main';
import FreeRegistration from '@/components/homepage/registration';
import { fetchHome } from '@/service/home';
import dynamic from 'next/dynamic';
import React from 'react';

const NewsComponent = dynamic(() => import('@/components/homepage/news'));
const RecommendComponent = dynamic(() => import('@/components/homepage/recommend'));

const HomePage = async () => {
  const homeList = await fetchHome();
  return (
    <div>
      <Main />
      <div className="flex flex-col items-center justify-center gap-8 px-4 py-12 md:px-48">
        <NewsComponent newsList={homeList.news} />
        <FreeRegistration />
      </div>
      <RecommendComponent courses={homeList.course} />
    </div>
  );
};

export default HomePage;
