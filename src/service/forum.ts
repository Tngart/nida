import { endpoint } from '@/providers/service';
import { ResponseDefault } from '@/types/default';
import { ForumLisPayload, ForumListResponse } from '@/types/forum';
import axios from 'axios';

export const fetchForum = async (params: ForumLisPayload): Promise<ForumListResponse> => {
  try {
    const { data } = await axios<ResponseDefault<ForumListResponse>>({
      url: endpoint(`/forum`),
      method: 'GET',
      params,
    });
    if (data.code !== 200) {
      throw new Error(`Failed to fetch faq: ${data.message}`);
    }

    return data.responseObject;
  } catch (error) {
    console.error('Error fetching faq:', error);
    throw error;
  }
};
