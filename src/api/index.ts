import { message } from 'antd';
import axios from 'axios';
import { API } from './config';

const instance = axios.create({
  timeout: 5000,
  withCredentials: true,
});

// const API_SERVER = process.env.BUILD_TYPE
//   ? SERVER_HOST[process.env.BUILD_TYPE]
//   : 'api';

// 设置post请求头
instance.defaults.headers.post['Content-Type'] =
  'application/x-www-form-urlencoded';
// instance.defaults.headers['Tt-Hospital-Id'] = '416665f29fa63e92';
// 添加请求拦截器
instance.interceptors.request.use(
  config => {
    config.url = `${API}${config?.url || ''}`;
    return config;
  },
  error => {
    return Promise.reject(error);
  },
);

// 添加响应拦截器
instance.interceptors.response.use(
  response => {
    if (response.status === 200) {
      switch (response.data.code) {
        case 302:
          window.location.href = '/login';
          break;
        case 401:
          break;
        case 403:
          break;
        case 404:
          break;
        case 500:
          break;
        case 10002:
          window.location.href = '/login';
          break;
        case 10006:
          message.error(response.data.msg);
          break;
        case 10101:
          message.error(response.data.msg);
          break;
        default:
      }
      return Promise.resolve(response);
    } else {
      message.error(response.data?.message);
      return Promise.reject(response);
    }
  },
  error => {
    return Promise.reject(error);
  },
);

export { axios };
export const getData = instance;
