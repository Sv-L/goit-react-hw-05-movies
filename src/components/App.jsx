import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';
import { Layout } from './Layout/Layout';
import './../pages/global.css';

const Home = lazy(() => import('../pages/HomePage.jsx'));
const Movies = lazy(() => import('../pages/MoviesPage.jsx'));
const MovieDetails = lazy(() => import('../pages/MovieDetailsPage.jsx'));
const NotFound = lazy(() => import('../pages/NotFoundPage.jsx'));
const Cast = lazy(() => import('../pages/CastPage.jsx'));
const Reviews = lazy(() => import('../pages/ReviewsPage.jsx'));

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
};
