import { NewsData } from '@/types/news';
import React, { FC } from 'react';
import dynamic from 'next/dynamic';

const FilterComponent = dynamic(() => import('./filter'));
const ContentComponent = dynamic(() => import('./content'));

interface IProps {
  newsList: NewsData[];
}

const NewsListComponent: FC<IProps> = ({ newsList }) => {
  return (
    <>
      <FilterComponent />
      <ContentComponent newsList={newsList} />
    </>
  );
};

export default NewsListComponent;
