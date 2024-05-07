import { useEffect, useRef } from 'react';
import { Transition } from 'react-transition-group';
import { IoIosClose } from 'react-icons/io';

import css from './Modal.module.css';
import { useLocation } from 'react-router-dom';

export default function Modal({ isOpen, onClose, children }) {
  const location = useLocation();
  const refLocation = useRef(location.state?.from ?? '/catalog');

  console.log(location);
  console.log(refLocation);

  const onWrapperClick = e => {
    if (e.target.classList.contains(css.modal_wrapper)) {
      onClose();
      window.history.back();
    }
  };

  useEffect(() => {
    const onKeyDown = e => {
      if (e.key === 'Escape') {
        onClose();
        window.history.back();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', onKeyDown);
    } else {
      document.removeEventListener('keydown', onKeyDown);
    }

    return () => {
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [isOpen, onClose]);

  return (
    <>
      <Transition in={isOpen} timeout={350} unmountOnExit={true}>
        {state => (
          <div className={`${css.modal} ${css[`modal--${state}`]}`}>
            <div className={css.modal_wrapper} onClick={onWrapperClick}>
              <div className={css.modal_content}>
                <button
                  className={css.close_btn}
                  to={refLocation.current}
                  onClick={() => {
                    onClose();
                    window.history.back();
                  }}
                >
                  <IoIosClose size={16} />
                </button>
                {children}
              </div>
            </div>
          </div>
        )}
      </Transition>
    </>
  );
}
