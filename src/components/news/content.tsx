import { NewsData } from '@/types/news';
import { Paper } from '@mui/material';
import dynamic from 'next/dynamic';
import React, { FC } from 'react';

interface IProps {
  newsList: NewsData[];
}

const NewsCardComponent = dynamic(() => import('./card'));

const Content: FC<IProps> = ({ newsList }) => {
  return (
    <div className="px-2 py-8 xl:px-72">
      <Paper elevation={4} className="flex flex-col gap-4 p-4">
        {newsList.map((news) => (
          <NewsCardComponent key={news.id} data={news} />
        ))}
      </Paper>
    </div>
  );
};

export default Content;
