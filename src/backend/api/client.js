import axios, { AxiosRequestConfig } from 'axios';
import * as config from "../config";


export const client = axios.create({
    baseURL: config.BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

