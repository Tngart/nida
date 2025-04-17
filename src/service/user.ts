import { endpoint } from '@/providers/service';
import { ResponseDefault } from '@/types/default';
import { ForgotPasswordPayload, LoginPayload } from '@/types/user';
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
    console.error('Error login:', error);
    if (axios.isAxiosError(error)) {
      return error.response?.data;
    }

    throw error;
  }
};

export const forgotPassword = async (payload: ForgotPasswordPayload): Promise<ResponseDefault<any>> => {
  try {
    const { username } = payload;
    const formData = new FormData();
    formData.append('username', username);
    const response = await axios<ResponseDefault<any>>({
      url: endpoint(`/user/forgetPassword`),
      method: 'POST',
      data: formData,
    });
    return response.data;
  } catch (error) {
    console.error('Error forget password:', error);
    if (axios.isAxiosError(error)) {
      return error.response?.data;
    }

    throw error;
  }
};
