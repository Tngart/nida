export const endpoint = (path: string) => `${process.env.NEXT_PUBLIC_API_URL}${path}`;

export const headers = (headers?: { [key: string]: string }) => {
  const option: { [key: string]: string } = {};

  return {
    headers: {
      ...option,
      ...headers,
    },
  };
};