import React, { useEffect} from 'react';
import { createPortal } from 'react-dom';
import {ModalOverlay, ModalWindow, ModalTitle, ModalHeader, ModalFooter, Icon, Button} from '../Modal/Modal.styled'

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
    <ModalOverlay onClick={handleOverlayClick}>
      <ModalWindow >
 
        <Icon  onClick={onClose}>
        
        </Icon>

        <ModalHeader >
          <ModalTitle>{modalTitle}</ModalTitle>
        </ModalHeader>
        <ModalFooter>
          
            <Button onClick={handleClickLeft}>
              {modalButtonleft}
            </Button>
            <Button  onClick={handleClickRight}>
              {modalButtonRight}
            </Button>
          
        </ModalFooter>
  
      </ModalWindow>
    </ModalOverlay>,
    modalRoot,
  );
}

export default RegMod;
