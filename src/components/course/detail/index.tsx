'use client';
import dynamic from 'next/dynamic';
import React, { FC } from 'react';

import { CourseData } from '@/types/course';
import { CourseIndexObjectResponse } from '@/types/course-index';

interface IProps {
  chapter?: CourseIndexObjectResponse;
  course: CourseData;
}
const ClassesComponent = dynamic(() => import('./class'));
const ChapterComponent = dynamic(() => import('./chapter'));
const InfoComponent = dynamic(() => import('./info'));
const TrainerComponent = dynamic(() => import('./trainer'));

const CourseDetailComponent: FC<IProps> = ({ chapter, course }) => {
  return (
    <div>
      <InfoComponent data={course} />
      <ClassesComponent data={course} />
      <TrainerComponent data={course} />
      <ChapterComponent data={chapter} />
    </div>
  );
};

export default CourseDetailComponent;
