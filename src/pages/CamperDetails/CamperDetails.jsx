import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

import css from './CamperDetails.module.css';
import {
  selectOpenModal,
  selectModalContent,
  selectModalId,
} from '../../redux/advert/advertsSelectors';
import { toggleModalWindow } from '../../redux/advert/advertsSlice';
import { getAdvertByIdThunk } from '../../redux/advert/advertsOperations';
import Modal from 'components/Modal/Modal';
import Features from 'components/Features/Features';
import Reviews from 'components/Reviews/Reviews';
import BookForm from 'components/BookForm/BookForm';

export default function CamperDetails() {
  const [showComponentByName, setShowComponentByName] = useState('');
  const dispatch = useDispatch();
  const modalOpen = useSelector(selectOpenModal);
  const advert = useSelector(selectModalContent);
  const advertId = useSelector(selectModalId);

  useEffect(() => {
    dispatch(getAdvertByIdThunk(advertId));
  }, [advertId, dispatch]);

  const { name, price, rating, reviews, location, gallery, description } =
    advert;

  return (
    <>
      <Modal
        isOpen={modalOpen}
        onClose={() => {
          dispatch(toggleModalWindow(false));
        }}
      >
        <h2>{name}</h2>
        <p>
          {rating}({reviews.length} Reviews)
        </p>
        <p>{location}</p>
        <p>€{price}.00</p>
        {gallery.map(item => (
          <img key={item} src={item} alt={name} width={290} />
        ))}
        <p>{description}</p>
        <button
          type="button"
          onClick={() => setShowComponentByName('features')}
        >
          Features
        </button>
        <button type="button" onClick={() => setShowComponentByName('reviews')}>
          Reviews
        </button>
        <hr />
        {showComponentByName === 'features' && (
          <div className={css.show_component_conteiner}>
            <Features />
            <BookForm />
          </div>
        )}
        {showComponentByName === 'reviews' && (
          <div className={css.show_component_conteiner}>
            <Reviews reviews={reviews} />
            <BookForm />
          </div>
        )}
      </Modal>
    </>
  );
}
