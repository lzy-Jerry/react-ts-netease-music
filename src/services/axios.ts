import axios from 'axios';
const BASE_URL = 'http://localhost:3000/';

const instance = axios.create({
    baseURL: BASE_URL,
    timeout: 30000
})

const request: {[key: string]: any} = {}

instance.interceptors.request.use(request => {
    console.log('请求拦截中...')
    // loading通过redux保存当前触发的loading的状态 后续再加
    return request;
})

instance.interceptors.response.use(response => {
    console.log('响应拦截中...')
    return response
})

request.post = (url: string, data: any, option = {}) => {
    return instance.post(url, data, option).then(response => {
        return response.data;
    });
};

request.get = (url: string, option = {}) => {
    return instance.get(url, option).then(response => {
        console.log(response)
        return response.data;
    });
};

request.put = (url: string, data: any, option = {}) => {
    return instance.put(url, data, option).then(response => {
        return response.data;
    });
};

request.delete = (url: string, option = {}) => {
    return instance.delete(url, option).then(response => {
        return response.data;
    });
}

export default request;