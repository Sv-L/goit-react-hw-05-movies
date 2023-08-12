import { useState, useEffect } from 'react';
import List from 'components/List';
import { fetchTrendingMovies } from '../services/api';
import trendingMoviesListisEmpty from '../images/movie.png';
import MoviesItem from 'components/MoviesItem';
const HomePage = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchTrendingMoviesData = async () => {
      try {
        setLoading(true);
        const trendingMovies = await fetchTrendingMovies();
        if (trendingMovies.length === 0) {
          throw new Error(`There are no movies`);
        } else {
          setTrendingMovies(trendingMovies);
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchTrendingMoviesData();
  }, []);

  return (
    <>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <img src={`${trendingMoviesListisEmpty}`} alt="movie" />
      ) : (
        <List
          data={trendingMovies}
          ItemComponent={MoviesItem}
          className={'movie-list'}
        />
      )}
    </>
  );
};

export default HomePage;
