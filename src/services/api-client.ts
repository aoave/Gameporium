import axios, { AxiosRequestConfig } from "axios";

const axiosInstance = axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: '121309247f3141f4a94baef00a2b5c9b'
    }
});

class APIClient<T> {
    endpoint: string;
    constructor(endpoint: string) {
        this.endpoint = endpoint;
    }

    getAll = (config: AxiosRequestConfig) => {
    return axiosInstance
    .get<FetchResponse<T>>(this.endpoint, config)
    .then(res => res.data)
    }
}

export default APIClient;


export interface FetchResponse<T> {
    count: number;
    results: T[];
}
