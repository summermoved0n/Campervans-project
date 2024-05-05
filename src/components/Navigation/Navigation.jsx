import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

import css from './Navigation.module.css';

export default function Navigation() {
  return (
    <>
      <header className={css.header}>
        <NavLink to="/">Home</NavLink>
        <div>
          <NavLink to="/catalog">Catalog</NavLink>
          <NavLink to="/favorites">Favorites</NavLink>
        </div>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
}
