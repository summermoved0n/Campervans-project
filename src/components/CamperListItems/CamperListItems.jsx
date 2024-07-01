import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FaRegHeart } from 'react-icons/fa';
import { FaHeart } from 'react-icons/fa6';
import { FaStar } from 'react-icons/fa';

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
import { Location } from 'Icons/Location';
import { Adults } from 'Icons/Adults';
import { Automatic } from 'Icons/Automatic';
import { Petrol } from 'Icons/Petrol';
import { Kitchen } from 'Icons/Kitchen';
import { Bed } from 'Icons/Bed';
import { AirConditioner } from 'Icons/AirConditioner';

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
            <h2 className={css.item_title}>{name}</h2>
            <div className={css.price_conteiner}>
              <p className={css.price_text}>€{price}.00</p>
              {!isFavorite(id) ? (
                <button
                  className={css.add_favorite_btn}
                  type="button"
                  onClick={() => onClickAddFavorite(id)}
                >
                  <FaRegHeart size={24} />
                </button>
              ) : (
                <button
                  className={css.add_favorite_btn}
                  type="button"
                  onClick={() => onClickRemoveFavorite(id)}
                >
                  <FaHeart size={24} color="#E44848" />
                </button>
              )}
            </div>
          </div>
          <div className={css.location_conteiner}>
            <FaStar size={16} color="#FFC531" />
            <p className={css.rating_text}>
              {rating}({reviews.length} Reviews)
            </p>
            <Location size={16} />
            <p className={css.location_text}>{location}</p>
          </div>
          <div className={css.description_conteiner}>
            <p className={css.description_text}>{description}</p>
          </div>
          <ul className={css.item_list_details}>
            <li className={css.item_details}>
              <Adults size={20} />
              <span>{adults} adults</span>
            </li>
            <li className={css.item_details}>
              <Automatic size={20} />
              <span>{transmission === 'automatic' && 'Automatic'}</span>
            </li>
            <li className={css.item_details}>
              <Petrol size={20} />
              <span>{engine === 'petrol' && 'Petrol'}</span>
            </li>
            <li className={css.item_details}>
              <Kitchen size={20} />
              <span>{details.kitchen && 'Kitchen'}</span>
            </li>
            <li className={css.item_details}>
              <Bed size={20} />
              <span>{details.beds} beds</span>
            </li>
            <li className={css.item_details}>
              <AirConditioner size={20} />
              <span>{details.airConditioner && 'AC'}</span>
            </li>
          </ul>
          <button
            className={css.show_more_btn}
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
