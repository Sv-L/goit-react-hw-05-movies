import { NavLink, Outlet } from 'react-router-dom';
import moviePoster from '../../images/photoshop-film-strip.jpg';

const MovieDetails = ({ movie }) => {
  const src = movie.poster_path
    ? `https://image.tmdb.org/t/p/w342${movie.poster_path}`
    : moviePoster;

  const title =
    movie.release_date === '' ? (
      <h1>{movie.title}</h1>
    ) : (
      <h1>
        {movie.title} ({`${movie.release_date}`.split('-')[0]})
      </h1>
    );
  const rating =
    movie.vote_average !== 0 ? <p>{movie.vote_average.toFixed(1)}</p> : null;

  const overview =
    movie.overview & (movie.overview.length > 0) ? (
      <>
        <h3>Overview</h3>
        <p>{movie.overview}</p>
      </>
    ) : null;
  const genres = movie.genres && movie.genres.length > 0 && (
    <>
      <h3>Genres:</h3> <p>{movie.genres.map(genre => genre.name).join(', ')}</p>
    </>
  );

  return (
    <>
      <img src={src} alt={`Poster for ${movie.title}`} />
      {title}
      {rating}
      {overview}
      {genres}
      <h2>Additional information</h2>
      <ul>
        <li>
          <NavLink to="cast">Cast</NavLink>
        </li>
        <li>
          <NavLink to="reviews">Reviews</NavLink>
        </li>
      </ul>
      <Outlet />
    </>
  );
};

export default MovieDetails;
