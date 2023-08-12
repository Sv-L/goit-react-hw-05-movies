import Details from 'components/MovieDetails';
import { useState, useEffect, useRef } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import { fetchDetailsMovie } from 'services/api';
import { HiChevronDoubleLeft } from 'react-icons/hi2';

const MovieDetailsPage = () => {
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const { movieId } = useParams();
  const location = useLocation();
  const backLinkLocotionState = useRef(location.state?.from ?? '/movies');

  useEffect(() => {
    if (error) {
      setError(false);
    }
    setLoading(true);
    const fetchSendMovie = async () => {
      try {
        const sendMovie = await fetchDetailsMovie(movieId);
        if (sendMovie) {
          setMovie(sendMovie);
        }
        if (sendMovie.success === false) {
          throw new Error(`The resource you requested could not be found.`);
        }
      } catch (error) {
        setError(error.message);
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchSendMovie();
  }, [error, movieId]);

  return (
    <div className="movie-details-page">
      <Link to={backLinkLocotionState.current} className="link-go-back">
        <HiChevronDoubleLeft />
        go back
      </Link>
      {loading ? (
        <p>loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        movie && <Details movie={movie} />
      )}
    </div>
  );
};

export default MovieDetailsPage;
