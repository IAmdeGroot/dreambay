import React, { useEffect } from "react";
import Modal from 'react-modal';


const customStyles = {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)',
      width: '80%',
      height: '80%',
      zIndex: 1000,
    }
  };

const CustomModal = (props) => {

  useEffect(() => {
    Modal.setAppElement('body');
  }, [])

  return (
    <Modal
    isOpen={props.isOpen}
    onRequestClose={props.closeModal}
    style={customStyles}
    contentLabel="Example Modal"
  >

    <button onClick={props.closeModal}>close</button>
    <iframe
        src="https://player.vimeo.com/video/452396453"
        width="100%"
        height="100%"
        frameBorder="0"
        allow="autoplay; fullscreen"
        allowFullScreen
      >
      </iframe>
  </Modal>
  );
};

export default CustomModal;
