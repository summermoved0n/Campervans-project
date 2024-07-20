import React from 'react';

import css from './Footer.module.css';
import { FooterLink } from 'services/styles/styledComponents';

export default function Footer() {
  return (
    <>
      <footer className={css.footer}>
        <div className={css.footer_conteiner}>
          <ul className={css.footer_list}>
            <li>
              <FooterLink to="/">Home</FooterLink>
            </li>
            <li>
              <p>
                <FooterLink to="/catalog">Book Now</FooterLink>
              </p>
            </li>
            <li>
              <FooterLink to="/favorites">Your favorite</FooterLink>
            </li>
          </ul>
          <a className={css.footer_back_link} href="#header">
            Back to top
          </a>
        </div>
      </footer>
    </>
  );
}
