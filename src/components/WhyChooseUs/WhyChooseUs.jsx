import React from 'react';

import css from './WhyChooseUs.module.css';

export default function WhyChooseUs() {
  return (
    <>
      <h2 className={css.main_subtitle}>Why Choose Us?</h2>
      <ul className={css.home_list}>
        <li>
          <p className={css.home_text}>
            <span>Comfort and Convenience:</span> Our campervans are equipped
            with everything you need for your comfort: cozy sleeping areas, a
            kitchen, a bathroom, and much more.
          </p>
        </li>
        <li>
          <p className={css.home_text}>
            <span>Flexible Rental Terms:</span> Rent a campervan for the period
            you need – from a few days to several weeks. We offer favorable
            conditions and affordable prices.
          </p>
        </li>
        <li>
          <p className={css.home_text}>
            <span>Adventures for Everyone:</span> Whether you are an experienced
            traveler or just starting to explore the world of camping, we will
            provide you with everything you need for a safe and unforgettable
            journey.
          </p>
        </li>
        <li>
          <p className={css.home_text}>
            <span>24/7 Support:</span> We are always available and ready to
            assist you at any moment during your trip.
          </p>
        </li>
      </ul>
    </>
  );
}
