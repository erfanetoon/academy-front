import axios from 'axios';
import { getItem } from './helper/localStorage';

const Api = axios.create({
    baseURL: 'http://localhost/api/',
    headers: {
        'Content-Type': 'application/json',
        Authorization: getItem('token') ? `Bearer ${getItem('token')}` : null,
        'Access-Control-Allow-Origin': '*',
    },
});

export const getApi = async (url, config = {}) => await Api.get(url, config);

export const postApi = async (url, body, config = {}) =>
    await Api.post(url, body, config);

export const putApi = async (url, body, config = {}) =>
    await Api.put(url, body, config);

export const deleteApi = async (url, config = {}) =>
    await Api.delete(url, config);

export default Api;
