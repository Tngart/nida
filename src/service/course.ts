import axios from 'axios';

import { endpoint } from '@/providers/service';
import {
  CourseCategoryResponse,
  CourseListPayload,
  CourseObjectDetailResponse,
  CourseObjectResponse,
} from '@/types/course';
import { CourseIndexObjectResponse } from '@/types/course-index';
import { ResponseDefault } from '@/types/default';

export const fetchCourse = async (params: CourseListPayload): Promise<CourseObjectResponse> => {
  try {
    const { data } = await axios<ResponseDefault<CourseObjectResponse>>({
      url: endpoint(`/course/search`),
      method: 'GET',
      params,
    });
    if (data.code !== 200) {
      throw new Error(`Failed to fetch course: ${data.message}`);
    }

    return data.responseObject;
  } catch (error) {
    console.error('Error fetching course:', error);
    throw error;
  }
};

export const fetchCourseCategory = async (): Promise<CourseCategoryResponse> => {
  try {
    const { data } = await axios<ResponseDefault<CourseCategoryResponse>>({
      url: endpoint(`/course/category/search`),
      method: 'GET',
    });
    if (data.code !== 200) {
      throw new Error(`Failed to fetch course category: ${data.message}`);
    }

    return data.responseObject;
  } catch (error) {
    console.error('Error fetching course category:', error);
    throw error;
  }
};

export const fetchCourseDetail = async (id: string): Promise<CourseObjectDetailResponse> => {
  try {
    const { data } = await axios<ResponseDefault<CourseObjectDetailResponse>>({
      url: endpoint(`/course/${id}`),
      method: 'GET',
    });
    if (data.code !== 200) {
      throw new Error(`Failed to fetch course detail: ${data.message}`);
    }
    return data.responseObject;
  } catch (error) {
    console.error('Error fetching course detail:', error);

    throw error;
  }
};

export const fetchCourseDetailByIndex = async (id: string): Promise<CourseIndexObjectResponse | void> => {
  try {
    const { data } = await axios<ResponseDefault<CourseIndexObjectResponse>>({
      url: endpoint(`/course/${id}/index`),
      method: 'GET',
    });
    if (data.code !== 200) {
      console.error(`Failed to fetch course detail: ${data}`);
    }
    return data.responseObject;
  } catch (error) {
    console.error('Error fetching course detail:', error);
  }
};
