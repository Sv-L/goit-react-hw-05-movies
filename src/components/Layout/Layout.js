import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { NavList, Link } from './Layout.styled.jsx';

export const Layout = () => {
  return (
    <>
      <header>
        <nav>
          <NavList>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/movies"> Movies </Link>
            </li>
          </NavList>
        </nav>
      </header>
      <Suspense fallback={<div>Loading...</div>}>
        <main>
          <Outlet />
        </main>
      </Suspense>
      {/* <footer>
      </footer> */}
    </>
  );
};
