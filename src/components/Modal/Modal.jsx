import React from 'react';
import PropTypes from 'prop-types';

import Portal from './Portal';
// import Icon from '../icon/Icon';
import {ModalOverlay, ModalWindow, ModalTitle, ModalHeader, ModalFooter, Icon, Button} from './Modal.styled'


const Modal = ({
  title, isOpen, onCancel, onSubmit,
}) => {

  return (
    <>
      { isOpen &&
        <Portal>
          <ModalOverlay>
            <ModalWindow>
              <ModalHeader>
              <ModalTitle>{title}
              <Icon onClick={onCancel} >
                 {/* <use href="../cross.svg" width="10px"></use> */}
               </Icon>
               </ModalTitle>
              </ModalHeader>
              <ModalFooter>
                <Button active onClick={onSubmit}>Yes</Button>
                <Button onClick={onCancel}>No</Button>
              </ModalFooter>
            </ModalWindow>
          </ModalOverlay>
        </Portal>
      }
    </>
  );
};

Modal.propTypes = {
  title: PropTypes.string,
  isOpen: PropTypes.bool,
  onCancel: PropTypes.func,
  onSubmit: PropTypes.func,
  children: PropTypes.node,
};

Modal.defaultProps = {
  title: 'Modal title',
  isOpen: false,
  onCancel: () => {},
  onSubmit: () => {},
  children: null,
};

export default Modal;