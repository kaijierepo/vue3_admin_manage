import axios from 'axios';
import { Message } from 'element-ui';
import router from '@/router/index.ts'

// 创建 axios 实例
const service = axios.create({
  baseURL: 'http://127.0.0.1:3000', // 基础 URL
  timeout: 5000, // 请求超时时间
});

// 请求拦截器
service.interceptors.request.use(
  config => {
    // 在这里你可以做一些请求前的操作
    const token = localStorage.getItem('token');
    if (token) {
      config.headers['Authorization'] = 'Bearer ' + token;
    }
    // 在这里你可以做一些请求前的操作
    return config;
  },
  error => {
    // 处理请求错误
    console.error(error); // for debug
    Promise.reject(error);
  }
);

// 响应拦截器
service.interceptors.response.use(
  response => {

    // 在这里你可以做一些响应的操作
    if(Reflect.has(response, 'data')) {
      return response.data
    }
    return response;
  },
  error => {
    // 处理响应错误
    if (error.response && error.response.status === 401) {
      
      Message.error('您无权限或者token过期, 即将跳转登录页面')
      router.push('./login')
      // 处理 401 错误
      console.log('Unauthorized!'); // 你可以在这里添加你的处理逻辑
    }
    // 处理响应错误
    console.error(error); // for debug
    Promise.reject(error);
  }
);

export function request({ method = 'post', url, params = {} }) {
   if(method === 'post') {
     console.log('###', url, params)
     return post(url, params)
   } else if(method === 'get') {
     return get(url, params)
   } 
}

// 封装 GET 请求
export function get(url, params) {
  return service.get(url, { params });
}

// 封装 POST 请求
export function post(url, data) {
  return service.post(url, data);
}

// 封装 PUT 请求
export function put(url, data) {
  return service.put(url, data);
}

// 封装 DELETE 请求
export function del(url) {
  return service.delete(url);
}