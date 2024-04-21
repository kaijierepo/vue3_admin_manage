import { request } from '@util/request';


export const login = params => request({ url: '/user/login', params })

export const getUserList = params => request({ url: '/user/findAll', params })