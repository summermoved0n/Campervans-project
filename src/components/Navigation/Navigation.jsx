import React from 'react';
import { Outlet } from 'react-router-dom';
import { StyledLink } from 'services/styles/styledComponents';

import css from './Navigation.module.css';

export default function Navigation() {
  return (
    <>
      <header className={css.header}>
        <div>
          <StyledLink to="/">Home</StyledLink>
        </div>
        <div className={css.header_right_wraper}>
          <StyledLink to="/catalog">Catalog</StyledLink>
          <StyledLink to="/favorites">Favorites</StyledLink>
        </div>
      </header>
      <div className={css.conteiner}>
        <main>
          <Outlet />
        </main>
      </div>
    </>
  );
}
