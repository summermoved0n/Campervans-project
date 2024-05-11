import React from 'react';
import { useSelector } from 'react-redux';
import { selectFavorites } from '../../redux/advert/advertsSelectors';
import CamperListItems from 'components/CamperListItems/CamperListItems';

export default function Favorite() {
  const favorites = useSelector(selectFavorites);

  return (
    <div>
      {favorites.length > 0 ? (
        <ul>
          {favorites.map(favorite => (
            <CamperListItems
              key={favorite._id}
              id={favorite._id}
              advert={favorite}
            />
          ))}
        </ul>
      ) : (
        <p>No favorites now</p>
      )}
    </div>
  );
}
