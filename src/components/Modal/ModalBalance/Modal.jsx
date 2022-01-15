import React from 'react';
import PropTypes from 'prop-types';
import Portal from '../Portal'

import {ModalWindow, ModalTitle, ModalHeader, ModalFooter} from './Modal.styled'


const Modal = ({isOpen}) => {

  return (
    <>
      { isOpen &&
      <Portal>
            <ModalWindow>
              <ModalHeader>
              <ModalTitle>
              Привет! Для начала работы внеси текущий баланс своего счета!
               </ModalTitle>
               <ModalFooter>
               Ты не можешь тратить деньги пока
их у тебя нет :)
               </ModalFooter>
              </ModalHeader>
           
            </ModalWindow>
          </Portal>
      }
    </>
  );
};

Modal.propTypes = {
isOpen: PropTypes.bool,

};

Modal.defaultProps = {
  isOpen: true,
};

export default Modal;