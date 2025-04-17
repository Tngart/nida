import { endpoint } from '@/providers/service';
import { ResponseDefault } from '@/types/default';
import { FaqDataListPayload, FaqDataListResponse, FaqListPayload, FaqListResponse } from '@/types/faq';
import axios from 'axios';

export const fetchFaq = async (params: FaqListPayload): Promise<FaqListResponse> => {
  try {
    const { data } = await axios<ResponseDefault<FaqListResponse>>({
      url: endpoint(`/faq`),
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

export const fetchFaqData = async (index: string, params: FaqDataListPayload): Promise<FaqDataListResponse> => {
  try {
    const { data } = await axios<ResponseDefault<FaqDataListResponse>>({
      url: endpoint(`/faq/${index}`),
      method: 'GET',
      params,
    });
    if (data.code !== 200) {
      throw new Error(`Failed to fetch faq data: ${data.message}`);
    }

    return data.responseObject;
  } catch (error) {
    console.error('Error fetching faq data:', error);
    throw error;
  }
};
