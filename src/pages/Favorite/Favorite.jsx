import React from 'react';
import { useSelector } from 'react-redux';
import { selectFavorites } from '../../redux/advert/advertsSelectors';
import CamperListItems from 'components/CamperListItems/CamperListItems';
import css from './Favorite.module.css';

export default function Favorite() {
  const favorites = useSelector(selectFavorites);

  return (
    <div className={css.favorite_conteiner}>
      {favorites.length > 0 ? (
        <ul className={css.favorite_list}>
          {favorites.map(favorite => (
            <CamperListItems
              key={favorite._id}
              id={favorite._id}
              advert={favorite}
            />
          ))}
        </ul>
      ) : (
        <p className={css.favorite_no_content_msg}>No favorites now</p>
      )}
    </div>
  );
}
