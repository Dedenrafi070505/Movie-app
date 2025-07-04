const   API_KEY = import.meta.env.VITE_API_KEY;
const BASE_URL = "https://api.themoviedb.org/3";

const ENDPOINTS = {
  POPULAR: `${BASE_URL}/movie/popular?api_key=${API_KEY}`,
//   TOP_RATED_MOVIE: `${BASE_URL}/movie/top_rated?api_key=${API_KEY}`,
//   NOW_PLAYING_MOVIE: `${BASE_URL}/movie/now_playing?api_key=${API_KEY}`,
//   DETAIL_MOVIE: (id) => `${BASE_URL}/movie/${id}?api_key=${API_KEY}&append_to_response=videos`,
};

export default ENDPOINTS;