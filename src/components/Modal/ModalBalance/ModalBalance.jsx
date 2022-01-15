import React, { Component, Fragment } from 'react';
import Modal from './Modal';

class ModalBalance extends Component {
  state = {
    isOpen: true,
  }

  closeModal = () => {
    this.setState({ isOpen: false });
  }


  render() {
    return (
      <Fragment>
<button onClick={this.closeModal}>Закрыть модалку</button>
        <Modal
          isOpen={this.state.isOpen}
        >      
        </Modal>
      </Fragment>
    );
  }
}

export default ModalBalance;