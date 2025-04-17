import dynamic from 'next/dynamic';
import React from 'react';

import { fetchCourseDetail, fetchCourseDetailByIndex } from '@/service/course';

const CourseDetailComponent = dynamic(() => import('@/components/course/detail'));

const CourseDetailPage = async ({ params }: { params: { id: string } }) => {
  const { id } = params;
  const courseDetail = await fetchCourseDetail(id);
  const chapterDetail = await fetchCourseDetailByIndex(id);
  return <CourseDetailComponent course={courseDetail.course} chapter={chapterDetail || undefined} />;
};

export default CourseDetailPage;
