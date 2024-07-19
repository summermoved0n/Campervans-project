import React from 'react';

import css from './HowItWorks.module.css';

export default function HowItWorks() {
  return (
    <>
      <h2 className={css.main_subtitle}>How It Works</h2>
      <ul className={css.home_list}>
        <li>
          <p className={css.home_text}>
            <span>Choose Your Campervan:</span> Explore our fleet and select the
            campervan that best suits your needs.
          </p>
        </li>
        <li>
          <p className={css.home_text}>
            <span>Book Online:</span> Easily and quickly book your chosen
            campervan through our website.
          </p>
        </li>
        <li>
          <p className={css.home_text}>
            <span>Pick Up Your Vehicle:</span> Receive your campervan at a
            convenient location and enjoy your trip.
          </p>
        </li>
        <li>
          <p className={css.home_text}>
            <span>Return the Campervan:</span> After your journey, return the
            campervan to the specified location.
          </p>
        </li>
      </ul>
    </>
  );
}
