import { apiManager } from "./apiManager";

export const getTopHeadlinesNews = async (params?: Record<string, string>) => {
  try {
    const response = await apiManager().get(`top-headlines`, { params });
    return response.data;
  } catch {
    console.log("Error al obtener las noticias");
  }
};

export const getEveryNewsFromAQ = async (params?: Record<string, string>) => {
  try {
    const response = await apiManager().get(`everything`, { params });
    return response.data;
  } catch {
    console.log("Error al obtener las noticias");
  }
};
