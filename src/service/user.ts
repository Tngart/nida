import { endpoint } from '@/providers/service';
import { ResponseDefault } from '@/types/default';
import { LoginPayload } from '@/types/user';
import axios from 'axios';

export const login = async (payload: LoginPayload): Promise<ResponseDefault<any>> => {
  try {
    const response = await axios<ResponseDefault<any>>({
      url: endpoint(`/user/login`),
      method: 'POST',
      data: payload,
    });
    return response.data;
  } catch (error) {
    console.error('Error registering account:', error);
    if (axios.isAxiosError(error)) {
      return error.response?.data;
    }

    throw error;
  }
};
