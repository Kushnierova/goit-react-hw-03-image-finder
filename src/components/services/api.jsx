import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '39658126-cca0e2f1e761c4f8cef133a9f';
const SEARCH_ENDPOINT = '';
const PER_PAGE = 12;

const api = axios.create({
  baseURL: BASE_URL,
  params: {
    key: API_KEY,
    per_page: PER_PAGE,
    safesearch: true,
  },
});

export class PixabayApi {
  static async getImages(q, per_page, page) {
    const { data } = await api.get(SEARCH_ENDPOINT, {
      params: {
        q,
        per_page,
        page,
      },
    });

    return data;
  }
}