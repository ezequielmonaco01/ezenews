import { apiManager } from "./apiManager";

export const getTopHeadlinesNews = async () => {
    try {
        const response = await apiManager().get(`top-headlines?country=us`)
        return response.data
    } catch {
        console.log('Error al obtener las noticias')
    }
}

export const getEveryNewsFromAQ = async (q: string) => {
    try {
        const response = await apiManager().get(`everything?q=${q}`)
        return response.data
    } catch {
        console.log('Error al obtener las noticias')
    }
}