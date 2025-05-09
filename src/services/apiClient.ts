import axios from 'axios';

const TMDB_BASE_URL = 'https://api.themoviedb.org/3'; // Adjusted baseURL
const TMDB_API_KEY = "3739e4f7e1d71504aebbd7e9d14c3419";

const apiClient = axios.create({
  baseURL: TMDB_BASE_URL,
  params: {
    api_key: TMDB_API_KEY, // Corrected parameter name
  },
});

export default apiClient;

