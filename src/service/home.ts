import axios from 'axios';

import { endpoint } from '@/providers/service';
import { ResponseDefault } from '@/types/default';
import { HomeResponseObject } from '@/types/home';

export const fetchHome = async (): Promise<HomeResponseObject> => {
  try {
    const { data } = await axios<ResponseDefault<HomeResponseObject>>({
      url: endpoint(`/home`),
      method: 'GET',
    });
    if (data.code !== 200) {
      throw new Error(`Failed to fetch home: ${data.message}`);
    }

    return data.responseObject;
  } catch (error) {
    console.error('Error fetching home:', error);
    throw error;
  }
};
