import { useState } from 'react';

import css from './CamperDetails.module.css';
import Modal from 'components/Modal/Modal';
import Features from 'components/Features/Features';
import Reviews from 'components/Reviews/Reviews';
import BookForm from 'components/BookForm/BookForm';
import LocationAndRating from 'components/LocationAndRating/LocationAndRating';

export default function CamperDetails({ advert, modalIsOpen, setModalIsOpen }) {
  const { name, price, rating, reviews, location, gallery, description } =
    advert;

  const [showComponentByName, setShowComponentByName] = useState('');
  const [activeButton, setActiveButton] = useState('');

  const handleButtonClick = buttonName => {
    setActiveButton(buttonName);
    setShowComponentByName(buttonName);
  };

  return (
    <>
      <Modal
        isOpen={modalIsOpen}
        onClose={() => {
          setModalIsOpen(false);
        }}
      >
        <h2 className={css.modal_title}>{name}</h2>
        <LocationAndRating
          rating={rating}
          reviews={reviews}
          location={location}
        />
        <p className={css.modal_price}>€{price}.00</p>
        <ul className={css.modal_photos_list}>
          {gallery.map(item => (
            <li key={item}>
              <img src={item} alt={name} width={290} />
            </li>
          ))}
        </ul>
        <p className={css.modal_description}>{description}</p>
        <div className={css.modal_btns_conteiner}>
          <button
            className={`${css.modal_down_btns} ${
              activeButton === 'features' ? `${css.active}` : ''
            }`}
            type="button"
            onClick={() => handleButtonClick('features')}
          >
            Features
          </button>
          <button
            className={`${css.modal_down_btns} ${
              activeButton === 'reviews' ? `${css.active}` : ''
            }`}
            type="button"
            onClick={() => handleButtonClick('reviews')}
          >
            Reviews
          </button>
        </div>

        {showComponentByName === 'features' && (
          <div className={css.show_component_conteiner}>
            <Features advert={advert} />
            <BookForm setModalIsOpen={setModalIsOpen} />
          </div>
        )}
        {showComponentByName === 'reviews' && (
          <div className={css.show_component_conteiner}>
            <Reviews reviews={reviews} />
            <BookForm setModalIsOpen={setModalIsOpen} />
          </div>
        )}
      </Modal>
    </>
  );
}
