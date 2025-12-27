import axios, { AxiosRequestConfig } from 'axios';

export class ApiHelper {
    static async get(url: string, config?: AxiosRequestConfig) {
        return axios.get(url, config);
    }

    static async post(url: string, data: any, config?: AxiosRequestConfig) {
        return axios.post(url, data, config);
    }

    static async put(url: string, data: any, config?: AxiosRequestConfig) {
        return axios.put(url, data, config);
    }

    static async delete(url: string, config?: AxiosRequestConfig) {
        return axios.delete(url, config);
    }
}
