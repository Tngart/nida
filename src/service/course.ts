import { endpoint } from '@/providers/service';
import { CourseCategoryResponse, CourseListPayload, CourseObjectResponse } from '@/types/course';
import axios from 'axios';

export const fetchCourse = async (params: CourseListPayload): Promise<CourseObjectResponse> => {
  try {
    const { data } = await axios({
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
    const { data } = await axios({
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

// export const fetchCourseDetail = async (id: string, params: CourseDetailPayload): Promise<CourseDetailResponse> => {
//   try {
//     const { data } = await axios({
//       url: endpoint(`/course/${id}/detail`),
//       method: 'GET',
//       params,
//     });
//     console.log(data);
//     if (data.code !== 200) {
//       throw new Error(`Failed to fetch course: ${data.message}`);
//     }
//     return data.responseObject;
//   } catch (error) {
//     console.error('Error fetching course:', error);

//     throw error;
//   }
// };
