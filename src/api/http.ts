import axios, { AxiosRequestConfig, AxiosError } from 'axios';

const instance = axios.create({
  baseURL: 'https://gateway.dataship.io/api/v1',
  timeout: 60000,
});

instance.interceptors.response.use(function(response) {
  return response;
}, function(error) {
  if (error.response.status === 504) {
    return Promise.resolve({
      data: {
        code: 504,
        message: 'Gateway Timeout'
      }
    });
  }
  return Promise.reject(error);
});

async function request<T, D = any>(config: AxiosRequestConfig<D>): Promise<T> {
  try {
    const res = await instance.request(config);
    return res.data;
  } catch (err) {
    return ((err as AxiosError<T, D>)?.response?.data as T);
  }
}

export default request;
