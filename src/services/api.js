// 'https://api.themoviedb.org/3/movie/popular

//1)список найпопулярніших фільмів на сьогодні для створення колекції на головній сторінці:
//https://api.themoviedb.org/3/trending/movie/day?language=en-US&api_key=dab7ec22bbd612f5b2269a078012fc2d

//2)пошук фільму за ключовим словом на сторінці фільмів
//  --url 'https://api.themoviedb.org/3/search/movie?query=Jack+Reacher&api_key=dab7ec22bbd612f5b2269a078012fc2d'

//жанри https://api.themoviedb.org/3/genre/movie/list?language=en&api_key=dab7ec22bbd612f5b2269a078012fc2d
//запит за жанром: https://api.themoviedb.org/3/discover/movie?api_key=dab7ec22bbd612f5b2269a078012fc2d&with_genres=35

//3)запит повної інформації про фільм для сторінки кінофільму
// https://api.themoviedb.org/3/movie/75145?language=en-US&api_key=dab7ec22bbd612f5b2269a078012fc2d

// 4)запит інформації про акторський склад для сторінки кінофільму
// https://api.themoviedb.org/3/movie/75145/credits?language=en-US&api_key=dab7ec22bbd612f5b2269a078012fc2d

// 5)запит оглядів для сторінки кінофільму
// https://api.themoviedb.org/3/movie/75145/reviews?language=en-US&page=1&api_key=dab7ec22bbd612f5b2269a078012fc2d
// "total_pages": 1,
//  "total_results": 1

//відео https://api.themoviedb.org/3/movie/75145/videos?language=en-US&api_key=dab7ec22bbd612f5b2269a078012fc2d

import axios from 'axios';
const API_THEMOVIEDB_BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = 'api_key=dab7ec22bbd612f5b2269a078012fc2d';

export const fetchTrendingMovies = async () => {
  const { data } = await axios.get(
    `${API_THEMOVIEDB_BASE_URL}/trending/movie/day?language=en-US&${API_KEY}`
  );
  // console.log(data);
  return data.results;
};

export const fetchSearch = async search => {
  const { data } = await axios.get(
    `${API_THEMOVIEDB_BASE_URL}/search/movie?query=${search}&${API_KEY}`
  );
  // console.log(data);
  return data.results;
};

export const fetchDetailsMovie = async id => {
  const { data } = await axios.get(
    `${API_THEMOVIEDB_BASE_URL}/movie/${id}?language=en-US&${API_KEY}`
  );
  console.log(data);
  return data;
};

export const fetchPosters = async id => {
  const { data } = await axios.get(
    `${API_THEMOVIEDB_BASE_URL}/movie/${id}/images`
  );
  console.log(data);
  return data;
};
