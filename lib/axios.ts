import Axios, { AxiosInstance, AxiosRequestConfig } from 'axios';

const config: AxiosRequestConfig = {
    baseURL: process.env.NEXT_PUBLIC_BACKEND_URL,
    headers: {
        'X-Requested-With': 'XMLHttpRequest',
    },
    withCredentials: true,
    withXSRFToken: true,
};

const axios: AxiosInstance = Axios.create(config);

axios.interceptors.response.use(
    response => response,
    error => Promise.reject(error),
);

export default axios;
