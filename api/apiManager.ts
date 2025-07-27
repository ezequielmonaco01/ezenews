import axios from "axios";

export const apiManager = () => {
    const api = axios.create({
        baseURL: 'https://newsapi.org/v2',
        headers: {
            Authorization: '8ac039f118334834bba9e4fe57995c80'
        },
        timeout: 5000
    })
    return api
}