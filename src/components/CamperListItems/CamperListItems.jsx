import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FaRegHeart } from 'react-icons/fa';
import { FaHeart } from 'react-icons/fa6';

import css from './CamperListItems.module.css';
import {
  selectAllAdverts,
  selectFavorites,
} from '../../redux/advert/advertsSelectors';
import {
  addToFavorites,
  removeFromFavorites,
} from '../../redux/advert/advertsSlice';
import CamperDetails from 'pages/CamperDetails/CamperDetails';

export default function CamperListItems({ id, advert }) {
  const {
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
  } = advert;

  const [modalIsOpen, setModalIsOpen] = useState(false);

  const dispatch = useDispatch();
  const adverts = useSelector(selectAllAdverts);
  const favorites = useSelector(selectFavorites);

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
      <li key={id} id={id} className={css.camper_catalog}>
        <img src={gallery[0]} alt={name} width={310} />
        <div>
          <div className={css.title_conteiner}>
            <h2>{name}</h2>
            <div className={css.price_conteiner}>
              <p>€{price}.00</p>
              {!isFavorite(id) ? (
                <button type="button" onClick={() => onClickAddFavorite(id)}>
                  <FaRegHeart size={24} />
                </button>
              ) : (
                <button type="button" onClick={() => onClickRemoveFavorite(id)}>
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
          <button
            type="button"
            onClick={() => {
              setModalIsOpen(true);
            }}
          >
            Show more
          </button>
        </div>
      </li>

      {modalIsOpen && (
        <CamperDetails
          advert={advert}
          modalIsOpen={modalIsOpen}
          setModalIsOpen={setModalIsOpen}
        />
      )}
    </>
  );
}
