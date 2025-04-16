'use client';
import { fetchNews } from '@/service/news';
import { NewsData, NewsListPayload } from '@/types/news';
import dynamic from 'next/dynamic';
import React, { FC, useState } from 'react';

const FilterComponent = dynamic(() => import('@/components/news/filter'));
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
      <FilterComponent onSubmit={onSubmit} />
      <ContentComponent newsList={listData} />
    </>
  );
};

export default NewsComponent;
