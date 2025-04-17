import axios from 'axios';

import { endpoint } from '@/providers/service';
import { NewsListPayload, NewsListResponse, NewsDetailResponse, NewsDetailPayload } from '@/types/news';

export const fetchNews = async (params: NewsListPayload): Promise<NewsListResponse> => {
  try {
    const { data } = await axios({
      url: endpoint(`/news`),
      method: 'GET',
      params,
    });
    if (data.code !== 200) {
      throw new Error(`Failed to fetch news: ${data.message}`);
    }

    return data.responseObject;
  } catch (error) {
    console.error('Error fetching news:', error);
    throw error;
  }
};

export const fetchNewsDetail = async (id: string, params: NewsDetailPayload): Promise<NewsDetailResponse> => {
  try {
    const { data } = await axios({
      url: endpoint(`/news/${id}/detail`),
      method: 'GET',
      params,
    });
    console.log(data);
    if (data.code !== 200) {
      throw new Error(`Failed to fetch news: ${data.message}`);
    }
    return data.responseObject;
  } catch (error) {
    console.error('Error fetching news:', error);

    throw error;
  }
};
