'use client';
import { Paper } from '@mui/material';
import dynamic from 'next/dynamic';
import React, { FC } from 'react';

import { CourseData } from '@/types/course';

const SupportTrainersComponent = dynamic(() => import('./support'));
const MainTrainerComponent = dynamic(() => import('./main'));

interface IProps {
  data: CourseData;
}

const TrainerComponent: FC<IProps> = ({ data }) => {
  return (
    <div className="py-4">
      <Paper elevation={0} className="px-12 py-8" sx={{ bgcolor: '#eeeeee' }}>
        <div className="flex flex-row">
          <MainTrainerComponent data={data} />
          {data.supportTrainers?.length ? <SupportTrainersComponent listData={data.supportTrainers} /> : null}
        </div>
      </Paper>
    </div>
  );
};

export default TrainerComponent;
