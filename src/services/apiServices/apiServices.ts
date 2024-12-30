/* eslint-disable promise/catch-or-return */
import axios, { InternalAxiosRequestConfig } from "axios";

const timeout = 30000;
const service = axios.create({
  timeout,
  baseURL: "xxxxxx",
});

service.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

service.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    return Promise.reject(error);
  }
);

interface axiosTypes<T> {
  data: T;
  status: number;
  statusText: string;
}

interface responseTypes<T> {
  status: number;
  message: string;
  data: T;
}

const requestHandler = <T>(
  method: "get" | "post" | "put" | "delete",
  url: string,
  params: object = {},
  config?: InternalAxiosRequestConfig
): Promise<T> => {
  let response: Promise<axiosTypes<responseTypes<T>>>;
  switch (method) {
    case "get":
      response = service.get(url, { params: { ...params }, ...config });
      break;
    case "post":
      response = service.post(url, { ...params }, { ...config });
      break;
    case "put":
      response = service.put(url, { ...params }, { ...config });
      break;
    case "delete":
      response = service.delete(url, { params: { ...params }, ...config });
      break;
  }

  return new Promise<T>((resolve, reject) => {
    response
      .then((res) => {
        const { data } = res;
        if (data.status !== 200) {
          reject(data);
        } else {
          resolve(data.data);
        }
      })
      .catch((error) => {
        reject(error);
      });
  });
};

const apiServices = {
  get: <T>(url: string, params?: object, config?: InternalAxiosRequestConfig) =>
    requestHandler<T>("get", url, params, config),
  post: <T>(
    url: string,
    params?: object,
    config?: InternalAxiosRequestConfig
  ) => requestHandler<T>("post", url, params, config),
  put: <T>(url: string, params?: object, config?: InternalAxiosRequestConfig) =>
    requestHandler<T>("put", url, params, config),
  delete: <T>(
    url: string,
    params?: object,
    config?: InternalAxiosRequestConfig
  ) => requestHandler<T>("delete", url, params, config),
};

export { apiServices };
