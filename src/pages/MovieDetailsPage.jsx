import Details from 'components/MovieDetails';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchDetailsMovie, fetchPosters } from 'services/api';

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchSendMovie = async () => {
      try {
        const sendMovie = await fetchDetailsMovie(movieId);
        if (sendMovie) {
          setMovie(sendMovie);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchSendMovie();
    fetchPosters(movieId);
  }, [movieId]);

  return <>{movie && <Details movie={movie} />}</>;
};

export default MovieDetailsPage;
