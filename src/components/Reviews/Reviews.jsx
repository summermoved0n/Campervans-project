import css from './Reviews.module.css';

export default function Reviews({ reviews }) {
  console.log(reviews);
  const reviewerAvatar = name => {
    const firstLetter = name.slice(0, 1);
    return firstLetter;
  };

  return (
    <div>
      {reviews.map(({ comment, reviewer_name, reviewer_rating }) => (
        <div key={`${reviewer_name}+${reviewer_rating}`}>
          <div className={css.avatar}>{reviewerAvatar(reviewer_name)}</div>
          <p>{reviewer_name}</p>
          <p>{reviewer_rating}</p>
          <p>{comment}</p>
        </div>
      ))}
    </div>
  );
}
