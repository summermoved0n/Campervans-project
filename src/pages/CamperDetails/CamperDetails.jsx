import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useParams } from 'react-router-dom';

import { selectOpenModal } from '../../redux/advert/advertsSelectors';
import { toggleModalWindow } from '../../redux/advert/advertsSlice';
import Modal from 'components/Modal/Modal';
import { useRef } from 'react';

export default function CamperDetails() {
  const dispatch = useDispatch();

  const { camperId } = useParams();
  const modalOpen = useSelector(selectOpenModal);

  return (
    <>
      {modalOpen && (
        <Modal
          isOpen={modalOpen}
          onClose={() => {
            dispatch(toggleModalWindow(false));
          }}
        >
          <p>{camperId}</p>
        </Modal>
      )}
    </>
  );
}
