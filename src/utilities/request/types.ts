import { AxiosResponse } from 'axios';

export type GetRequest = (
    url: string,
    config?: any
) => Promise<AxiosResponse<any>>;

export type PostRequest = (
    url: string,
    body: any,
    config?: any
) => Promise<AxiosResponse<any>>;

export type PutRequest = (
    url: string,
    body: any,
    config?: any
) => Promise<AxiosResponse<any>>;

export type DeleteRequest = (
    url: string,
    config?: any
) => Promise<AxiosResponse<any>>;
