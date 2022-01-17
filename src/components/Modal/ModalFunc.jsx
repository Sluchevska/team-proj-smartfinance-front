import React, { Component, Fragment } from 'react';
import Modal from './Modal';
const modalRoot = document.querySelector("#modal-root");

class ModalFunc extends Component {
  
  state = {
    isOpen: false,
  }

  openModal = () => {
    this.setState({ isOpen: true });
  }

  handleSubmit = () => {
    console.log('Submit function!');
    this.setState({ isOpen: false });
  }

  handleCancel = () => {
    console.log('Cancel function!');
    this.setState({ isOpen: false });
  }

  closeModal = e => {
    this.props.onClose();
  };

  toAgree = e => {
    this.props.toAgree();
  };

  render() {
    
    return (
      <Fragment>
<button onClick={this.openModal} >открыть модалку</button>
        <Modal
          title="тут текст много используемый"
          isOpen={this.state.isOpen}
          onSubmit={this.handleSubmit}
          onCancel={this.handleCancel}
        >      
        </Modal>

      </Fragment>
    );
  }
}

export default ModalFunc;