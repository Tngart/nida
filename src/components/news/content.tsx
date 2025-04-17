import { Paper } from '@mui/material';
import dynamic from 'next/dynamic';
import React, { FC } from 'react';

import { NewsData } from '@/types/news';

import Empty from '../empty';

interface IProps {
  newsList: NewsData[];
}

const NewsCardComponent = dynamic(() => import('./card'));

const Content: FC<IProps> = ({ newsList }) => {
  return (
    <div className="py-16">
      <Paper elevation={4} className="flex flex-col gap-4 p-4">
        {newsList.length ? newsList.map((news) => <NewsCardComponent key={news.id} data={news} />) : <Empty />}
      </Paper>
    </div>
  );
};

export default Content;
