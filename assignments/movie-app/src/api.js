import axios from 'axios';

const API_KEY = 'f02a47d1';
const BASE_URL = 'http://www.omdbapi.com/';

if (!API_KEY) {
    console.error(
        'OMDB API key is missing! Add it to .env as VITE_OMDB_API_KEY.'
    );
}

export const searchMovies = async (query) => {
    const response = await axios.get(
        `${BASE_URL}?apikey=${API_KEY}&s=${query}`
    );
    return response.data.Search || [];
};

export const getMovieDetails = async (id) => {
    const response = await axios.get(`${BASE_URL}?apikey=${API_KEY}&i=${id}`);
    return response.data;
};
