import { endpoint } from '@/providers/service';
import { NewsPayload, NewsResponse } from '@/types/news';
import axios from 'axios';

export const fetchNews = async (params: NewsPayload): Promise<NewsResponse> => {
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
