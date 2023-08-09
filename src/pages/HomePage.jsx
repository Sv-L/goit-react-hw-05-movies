import { useState, useEffect } from 'react';
import MoviesList from '../components/MoviesList';
import { fetchTrendingMovies } from '../services/api';

const HomePage = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    const fetchTrendingMoviesData = async () => {
      try {
        // setIsLoading(true);
        const trendingMovies = await fetchTrendingMovies();
        setTrendingMovies(trendingMovies);
      } catch (error) {
        // setError(error.message);
      } finally {
        // setIsLoading(false);
      }
    };

    fetchTrendingMoviesData();
  }, []);

  return <MoviesList movies={trendingMovies} />;
};

export default HomePage;
