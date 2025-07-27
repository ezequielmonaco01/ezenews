import { create } from "zustand";
import { New } from "../interfaces/news";
import { getEveryNewsFromAQ, getTopHeadlinesNews } from "../api/services";

interface NewsState {
  news: New[];
  healthNews: New[];
  polityNews: New[];
  techNews: New[];
  economyNews: New[];
  isLoading: boolean;
  setNews: (news: New[]) => void;
  getTopHeadlines: (params?: Record<string, string>) => Promise<void>;
  getEveryNewsFromAQ: (params?: Record<string, string>) => Promise<void>;
}

export const NewsStore = create<NewsState>((set) => ({
  news: [],
  healthNews: [],
  polityNews: [],
  techNews: [],
  economyNews: [],
  isLoading: false,
  setNews: (news: New[]) => set({ news }),
  getTopHeadlines: async (params?: Record<string, string>) => {
    set({ isLoading: true });
    const res = await getTopHeadlinesNews(params);
    set({ news: res.articles, isLoading: false });
  },
  getEveryNewsFromAQ: async (params?: Record<string, string>) => {
    set({ isLoading: true });
    const res = await getEveryNewsFromAQ(params);
    if (params?.q === "health") {
      set({ healthNews: res.articles, isLoading: false });
    } else if (params?.q === "politics") {
      set({ polityNews: res.articles, isLoading: false });
    } else if (params?.q === "technology") {
      set({ techNews: res.articles, isLoading: false });
    } else {
      set({ economyNews: res.articles, isLoading: false });
    }
  },
}));
