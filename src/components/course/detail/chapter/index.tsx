'use client';
import { Paper } from '@mui/material';
import dynamic from 'next/dynamic';
import React, { FC } from 'react';

import { CourseIndexObjectResponse } from '@/types/course-index';

interface IProps {
  data?: CourseIndexObjectResponse;
}

const ChapterMaterialComponent = dynamic(() => import('./chapter'));
const TopicComponent = dynamic(() => import('./topic'));

const ClassesComponent: FC<IProps> = ({ data }) => {
  console.log({ data });
  return (
    <div className="relative py-[35px]">
      <div className="absolute left-1/2 top-0 -z-10 h-full w-screen -translate-x-1/2 bg-[#1d1d21]" />
      <Paper className="mx-auto max-w-[1280px] px-4 py-4">
        <div className="flex flex-col gap-8">
          <TopicComponent data={data} />
          {Boolean(data?.total) && (
            <div>
              {data?.chapters.map((item, index) => (
                <ChapterMaterialComponent data={item} files={data.files} key={index} />
              ))}
            </div>
          )}
        </div>
      </Paper>
    </div>
  );
};

export default ClassesComponent;
