/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from 'axios';

import { endpoint } from '@/providers/service';
import { PositionResponseObject, RegisterPayload } from '@/types/account';
import { ResponseDefault } from '@/types/default';

export const fetchPositions = async (): Promise<PositionResponseObject> => {
  try {
    const { data } = await axios<ResponseDefault<PositionResponseObject>>({
      url: endpoint(`/account/positions`),
      method: 'GET',
    });
    if (data.code !== 200) {
      throw new Error(`Failed to fetch positions: ${data.message}`);
    }

    return data.responseObject;
  } catch (error) {
    console.error('Error fetching positions:', error);
    throw error;
  }
};

export const registerAccount = async (payload: RegisterPayload): Promise<ResponseDefault<any>> => {
  try {
    const { title, firstname, lastname, email, tel, password, position, userCode } = payload;
    const formData = new FormData();
    formData.append('title', title);
    formData.append('firstname', firstname);
    formData.append('lastname', lastname);
    formData.append('email', email);
    formData.append('tel', tel);
    formData.append('password', password);
    formData.append('position', position);
    formData.append('userCode', userCode);
    const response = await axios<ResponseDefault<any>>({
      url: endpoint(`/account/register`),
      method: 'POST',
      data: formData,
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
