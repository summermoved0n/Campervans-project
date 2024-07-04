import css from './Reviews.module.css';

import { FaStar } from 'react-icons/fa';

export default function Reviews({ reviews }) {
  const reviewerAvatar = name => {
    const firstLetter = name.slice(0, 1);
    return firstLetter;
  };

  return (
    <div className={css.reviews_conteiner}>
      <ul className={css.reviews_list}>
        {reviews.map(({ comment, reviewer_name, reviewer_rating }) => (
          <li
            className={css.reviews_item}
            key={`${reviewer_name}+${reviewer_rating}`}
          >
            <div className={css.reviewer_info_conteiner}>
              <div className={css.reviewer_avatar}>
                {reviewerAvatar(reviewer_name)}
              </div>
              <div className={css.reviewer_info}>
                <p className={css.reviewer_name}>{reviewer_name}</p>
                <ul className={css.reviewer_rating_list}>
                  <li>
                    <FaStar
                      size={16}
                      color={reviewer_rating >= 1 ? '#FFC531' : '#f2f4f7'}
                    />
                  </li>
                  <li>
                    <FaStar
                      size={16}
                      color={reviewer_rating >= 2 ? '#FFC531' : '#f2f4f7'}
                    />
                  </li>
                  <li>
                    <FaStar
                      size={16}
                      color={reviewer_rating >= 3 ? '#FFC531' : '#f2f4f7'}
                    />
                  </li>
                  <li>
                    <FaStar
                      size={16}
                      color={reviewer_rating >= 4 ? '#FFC531' : '#f2f4f7'}
                    />
                  </li>
                  <li>
                    <FaStar
                      size={16}
                      color={reviewer_rating >= 5 ? '#FFC531' : '#f2f4f7'}
                    />
                  </li>
                </ul>
              </div>
            </div>
            <p className={css.reviewer_comment}>{comment}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
