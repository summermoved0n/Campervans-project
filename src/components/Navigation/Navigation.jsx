import React from 'react';
import { Outlet } from 'react-router-dom';

import css from './Navigation.module.css';
import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';

export default function Navigation() {
  return (
    <>
      <Header />
      <div className={css.conteiner}>
        <main>
          <Outlet />
        </main>
      </div>
      <Footer />
    </>
  );
}
