import { SignOut } from '@/utils/sign-out';

import { LocalStorage } from './local-storage';

export const endpoint = (path: string) => `${process.env.NEXT_PUBLIC_API_URL}${path}`;

export const headers = (headers?: { [key: string]: string }, auth: boolean = true) => {
  const option: { [key: string]: string } = {};

  if (auth) {
    option['Authorization'] = `Bearer ${LocalStorage.accessToken}`;
  }

  return {
    headers: {
      ...option,
      ...headers,
    },
  };
};
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const handleError = (error: any) => {
  if (error?.response?.data.code === 'KS002') {
    SignOut();
  }
  return {
    message: error?.response?.data.message,
    code: error?.response?.data.code,
    status: error?.response?.status,
  };
};
