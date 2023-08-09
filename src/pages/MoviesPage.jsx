import MoviesList from 'components/MoviesList';
import { useState, useEffect } from 'react';
import { fetchSearch } from 'services/api';

const { default: Searchbar } = require('components/Searchbar');

const MoviesPage = () => {
  const [search, setSearch] = useState('');
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchSearchMovies = async () => {
      try {
        const searchMovies = await fetchSearch(search);
        setMovies(searchMovies);
      } catch (error) {
        console.log(error);
      }
    };
    fetchSearchMovies();
  }, [search]);
  return (
    <>
      <Searchbar onSetSearch={setSearch} />
      <MoviesList movies={movies} />
    </>
  );
};
export default MoviesPage;
