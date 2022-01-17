import React, { useEffect} from 'react';
import PropTypes from 'prop-types';

import Portal from './Portal';
// import Icon from '../icon/Icon';
import {ModalOverlay, ModalWindow, ModalTitle, ModalHeader, ModalFooter, Icon, Button} from './Modal.styled'
const modalRoot = document.querySelector('#modal-root');

function Modal ({
  handleClickLeft,
  handleClickRight,
  onClose,
  modalTitle,
  modalButtonleft,
  modalButtonRight,
})  {
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
  

  return (
    <>
     
        <Portal>
          <ModalOverlay onClick={handleOverlayClick}>
            <ModalWindow>
              
              <ModalHeader>
              <ModalTitle>{modalTitle}
              <Icon onClick={onClose} >
                
               </Icon>
               </ModalTitle>
              </ModalHeader>
              <ModalFooter>
                <Button type="button" active  onClick={handleClickLeft}>{modalButtonleft}</Button>
                <Button type="button" onClick={handleClickRight}>{modalButtonRight}</Button>
              </ModalFooter>
            </ModalWindow>
        </ModalOverlay>,
       
        </Portal>
  
    </>
  );
};


export default Modal;