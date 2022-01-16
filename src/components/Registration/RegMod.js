import React, { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

const modalRoot = document.querySelector('#modal-root');

function RegMod({
  handleClickLeft,
  handleClickRight,
  onClose,
  modalTitle = 'Вы действительно хотите выйти?',
  modalButtonleft = 'Да',
  modalButtonRight = ' Нет',
  }) {
  useEffect(() => {
    window.document.body.style.overflowY = 'hidden';
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.document.body.style.overflowY = 'visible';
    };
  });

  const handleKeyDown = e => {
    if (e.code === 'Escape') {
      onClose();
    }
  };

  const handleOverlayClick = e => {
    if (e.currentTarget === e.target) {
      onClose();
    }
  };

  

  return createPortal(
    <div  onClick={handleOverlayClick}>
      <div >
        <span  onClick={onClose}>
          &#10006;
        </span>

        <div >
          <p>{modalTitle}</p>
        </div>

        {/* <p className={styles.title}>{modalTitle}</p> */}

        <div >
          <div >
            <button onClick={handleClickLeft}>
              {modalButtonleft}
            </button>
            <button  onClick={handleClickRight}>
              {modalButtonRight}
            </button>
          </div>
        </div>
      </div>
    </div>,
    modalRoot,
  );
}

export default RegMod;
