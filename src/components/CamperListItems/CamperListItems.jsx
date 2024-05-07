import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FaRegHeart } from 'react-icons/fa';
import { FaHeart } from 'react-icons/fa6';
import { Link, Outlet } from 'react-router-dom';

import css from './CamperListItems.module.css';
import { getAdvertsThunk } from '../../redux/advert/advertsOperations';
import {
  selectAllAdverts,
  selectFavorites,
} from '../../redux/advert/advertsSelectors';
import {
  addToFavorites,
  removeFromFavorites,
  toggleModalWindow,
} from '../../redux/advert/advertsSlice';

export default function CamperListItems() {
  const dispatch = useDispatch();
  const adverts = useSelector(selectAllAdverts);
  const favorites = useSelector(selectFavorites);

  useEffect(() => {
    dispatch(getAdvertsThunk());
  }, [dispatch]);

  const onClickAddFavorite = id => {
    const [favoriteAd] = adverts.filter(advert => advert._id === id);
    dispatch(addToFavorites(favoriteAd));
  };

  const onClickRemoveFavorite = id => {
    dispatch(removeFromFavorites(id));
  };

  const isFavorite = id => favorites.some(favorite => favorite._id === id);

  return (
    <>
      <Outlet />
      {adverts.map(
        ({
          _id,
          name,
          price,
          reviews,
          location,
          description,
          rating,
          gallery,
          details,
          adults,
          transmission,
          engine,
        }) => (
          <div key={_id} id={_id} className={css.camper_catalog}>
            <img src={gallery[0]} alt={name} width={310} />

            <div>
              <div className={css.title_conteiner}>
                <h2>{name}</h2>
                <div className={css.price_conteiner}>
                  <p>€{price}.00</p>
                  {!isFavorite(_id) ? (
                    <button
                      type="button"
                      onClick={() => onClickAddFavorite(_id)}
                    >
                      <FaRegHeart size={24} />
                    </button>
                  ) : (
                    <button
                      type="button"
                      onClick={() => onClickRemoveFavorite(_id)}
                    >
                      <FaHeart size={24} color="#E44848" />
                    </button>
                  )}
                </div>
              </div>
              <div>
                <p>
                  {rating}({reviews.length} Reviews)
                </p>
                <p>{location}</p>
              </div>
              <div>
                <p className={css.description_text}>{description}</p>
              </div>
              <div>
                <ul>
                  <li>{adults} adults</li>
                  <li>{transmission === 'automatic' && 'Automatic'}</li>
                  <li>{engine === 'petrol' && 'Petrol'}</li>
                  <li>{details.kitchen && 'Kitchen'}</li>
                  <li>{details.beds} beds</li>
                  <li>{details.airConditioner && 'AC'}</li>
                </ul>
              </div>
              <Link
                to={`/catalog/${_id}`}
                onClick={() => {
                  dispatch(toggleModalWindow(true));
                }}
              >
                Show more
              </Link>
            </div>
          </div>
        )
      )}
    </>
  );
}
