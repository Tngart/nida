'use client';
import { fetchCourse } from '@/service/course';
import { Category, CourseData, CourseListPayload } from '@/types/course';
import dynamic from 'next/dynamic';
import React, { FC, useState } from 'react';

const SearchComponent = dynamic(() => import('@/components/course/search'));
const CardComponent = dynamic(() => import('@/components/course/card'));

interface IProps {
  categories: Category[];
  courseList: CourseData[];
}
const CourseComponent: FC<IProps> = ({ categories, courseList }) => {
  const [listData, setListData] = useState<CourseData[]>(courseList);
  const onSubmit = async (payload: CourseListPayload) => {
    const data = await fetchCourse(payload);
    setListData(data.courses);
  };
  return (
    <>
      <div className="absolute left-1/2 top-0 z-0 h-[250px] w-screen -translate-x-1/2 bg-[#1d1d21] md:h-[200px]" />
      <SearchComponent categories={categories} onSubmit={onSubmit} />
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
        {listData.map((course) => (
          <CardComponent key={course.id} data={course} />
        ))}
      </div>
    </>
  );
};

export default CourseComponent;
