import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';
import { getItem } from '..//helper/localStorage';
import { DeleteRequest, GetRequest, PostRequest, PutRequest } from './types';

const API: AxiosInstance = axios.create({
    baseURL:
        typeof window !== 'undefined'
            ? process.env.NEXT_PUBLIC_API_URL
            : process.env.API_URL,
    headers: {
        'Content-Type': 'application/json',
        Authorization: getItem('token') ? `Bearer ${getItem('token')}` : null,
        'Access-Control-Allow-Origin': '*',
    },
});

export const getApi: GetRequest = async (url, config = {}) =>
    await API.get(url, config);

export const postApi: PostRequest = async (url, body, config = {}) =>
    await API.post(url, body, config);

export const putApi: PutRequest = async (url, body, config = {}) =>
    await API.put(url, body, config);

export const deleteApi: DeleteRequest = async (url, config = {}) =>
    await API.delete(url, config);

export default API;
