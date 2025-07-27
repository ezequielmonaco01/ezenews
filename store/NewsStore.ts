import { create } from "zustand";
import { New } from "../interfaces/news";
import { getEveryNewsFromAQ, getTopHeadlinesNews } from "../api/services";

interface NewsState {
    news: New[];
    healthNews: New[];
    polityNews: New[];
    techNews: New[];
    economyNews: New[];
    setNews: (news: New[]) => void;
    getTopHeadlines: () => Promise<void>;
    getEveryNewsFromAQ: (q: string) => Promise<void>;
}

export const NewsStore = create<NewsState>((set) => ({
    news: [],
    healthNews: [],
    polityNews: [],
    techNews: [],
    economyNews: [],
    setNews: (news: New[]) => set({ news }),
    getTopHeadlines: async () => {
        const res = await getTopHeadlinesNews()
        set({ news: res.articles })
    },
    getEveryNewsFromAQ: async (q: string) => {
        const res = await getEveryNewsFromAQ(q)
        if (q === 'health') {
            set({ healthNews: res.articles })
        } else if (q === 'politics') {
            set({ polityNews: res.articles })
        } else if (q === 'technology') {
            set({ techNews: res.articles })
        } else if (q === 'economy') {
            set({ economyNews: res.articles })
        }
    }
}))