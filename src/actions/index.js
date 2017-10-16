import axios from 'axios';

export const FETCH_ARTICLES = 'FETCH_ARTICLES';

const API_KEY = 'apiKey=f004ae01f9184d9c8a8209b412465dcf';

const ROOT_URL = 'https://newsapi.org/v1/articles'

export function fetchArticles(src = 'ign') {
    const request = axios.get(`${ROOT_URL}?source=${src}&sortBy=top&${API_KEY}`)
    return {
        type: FETCH_ARTICLES,
        payload: request
    }
}