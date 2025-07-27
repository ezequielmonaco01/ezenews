import { Alert } from "react-native";
import { apiManager } from "./apiManager";

export const getTopHeadlinesNews = async () => {
    try {
        const response = await apiManager().get(`top-headlines?country=us`)
        return response.data
    } catch {
        Alert.alert('Oops!', 'Hubo un error al obtener las noticias.')
    }
}

export const getEveryNewsFromAQ = async (q?: string) => {
    try {
        const response = await apiManager().get(`everything?q=${q}`)
        return response.data
    } catch {
        Alert.alert('Oops!', 'Hubo un error al obtener las noticias.')
    }
}