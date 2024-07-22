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
              <FooterLink className={css.footer_link} to="/">
                Home
              </FooterLink>
            </li>
            <li>
              <p>
                <FooterLink className={css.footer_link} to="/catalog">
                  Book Now
                </FooterLink>
              </p>
            </li>
            <li>
              <FooterLink className={css.footer_link} to="/favorites">
                Your favorite
              </FooterLink>
            </li>
          </ul>
          <a
            className={`${css.footer_back_link} ${css.footer_link}`}
            href="#header"
          >
            Back to top
          </a>
        </div>
      </footer>
    </>
  );
}
