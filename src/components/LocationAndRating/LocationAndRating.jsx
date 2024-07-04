import { Location } from 'Icons/Location';
import { FaStar } from 'react-icons/fa';

import css from './LocationAndRating.module.css';

export default function LocationAndRating({ rating, reviews, location }) {
  return (
    <div className={css.location_conteiner}>
      <FaStar size={16} color="#FFC531" />
      <p className={css.rating_text}>
        {rating}({reviews.length} Reviews)
      </p>
      <Location size={16} />
      <p className={css.location_text}>{location}</p>
    </div>
  );
}
