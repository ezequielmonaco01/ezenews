export interface New {
    source: {
        id: string
        name: string
    },
    author: string,
    title: string,
    description: string,
    url: string,
    urlToImage: string,
    publishedAt: string,
    content: string
}

export interface NewsResponse {
    status: string,
    totalResults: number,
    articles: New[]
}