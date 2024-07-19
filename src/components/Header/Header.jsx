import React from 'react';

import css from './Header.module.css';
import { StyledLink } from 'services/styles/styledComponents';

export default function Header() {
  return (
    <>
      <header id="header" className={css.header}>
        <div className={css.header_conteiner}>
          <div>
            <StyledLink to="/">Home</StyledLink>
          </div>
          <div className={css.header_right_wraper}>
            <StyledLink to="/catalog">Catalog</StyledLink>
            <StyledLink to="/favorites">Favorites</StyledLink>
          </div>
        </div>
      </header>
    </>
  );
}
