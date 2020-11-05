import React from 'react';
import Modal from 'react-modal';
import useModalStore from '../../util/store';

import './ImageModal.scss';

Modal.setAppElement('#root');

function ImageModal() {
  const isModalOpen = useModalStore((state) => state.isModalOpen);
  const toggleModal = useModalStore((state) => state.toggleModal);
  const modalImage = useModalStore((state) => state.modalImage);
  const title = useModalStore((state) => state.title);
  return (
    <Modal
      isOpen={isModalOpen}
      onRequestClose={toggleModal}
      style={{
        overlay: {
          backgroundColor: '#00000081',
        },
        content: {
          display: 'contents',
          justifyContent: 'center',
          alignItems: 'center',
        },
      }}
    >
      <img id='modal-image' alt={title} src={modalImage} />
      <button className='modal-close' onClick={toggleModal}>
        × Close
      </button>
    </Modal>
  );
}

export default ImageModal;
