import { Link } from 'react-router-dom';
import moviePoster from '../../images/photoshop-film-strip.jpg';

const MoviesItem = ({ movie }) => {
  const src = movie.poster_path
    ? `https://image.tmdb.org/t/p/w342${movie.poster_path}`
    : moviePoster;

  return (
    <li>
      <Link to={`/movies/${movie.id}`}>
        <p>{movie.title}</p>
        <img src={src} alt={`Poster for ${movie.title}`} />
        <p>{movie.vote_average.toFixed(1)}</p>
      </Link>
    </li>
  );
};

export default MoviesItem;
