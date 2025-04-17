'use client';
import { fetchNews } from '@/service/news';
import { NewsData, NewsListPayload } from '@/types/news';
import dynamic from 'next/dynamic';
import React, { FC, useState } from 'react';

const SearchComponent = dynamic(() => import('@/components/news/search'));
const ContentComponent = dynamic(() => import('@/components/news/content'));

interface IProps {
  newsList: NewsData[];
}
const NewsComponent: FC<IProps> = ({ newsList }) => {
  const [listData, setListData] = useState<NewsData[]>(newsList);
  const onSubmit = async (payload: NewsListPayload) => {
    const data = await fetchNews(payload);
    setListData(data.news);
  };
  return (
    <>
      <div className="absolute left-1/2 top-0 z-0 h-[250px] w-screen -translate-x-1/2 bg-[#1d1d21] md:h-[200px]" />
      <SearchComponent onSubmit={onSubmit} />
      <ContentComponent newsList={listData} />
    </>
  );
};

export default NewsComponent;
