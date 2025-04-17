import dynamic from 'next/dynamic';
import React from 'react';

import { fetchCourse, fetchCourseCategory } from '@/service/course';

const CourseComponent = dynamic(() => import('@/components/course'));

const CoursePage = async () => {
  const courseList = await fetchCourse({ max: 10, offset: 0, orderBy: 'name', orderType: 'desc' });
  const categories = await fetchCourseCategory();
  return <CourseComponent courseList={courseList.courses} categories={categories.categories} />;
};

export default CoursePage;
