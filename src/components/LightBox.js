import React from "react";
import { Modal } from "react-bootstrap";
const LightBox = props => {
  return (
    <div>
      <div onClick={props.handleModalToggle}>{props.button}</div>
      <Modal show={props.isOpen} onHide={props.handleModalToggle}>
        <Modal.Header closeButton />
        <Modal.Body>{props.children}</Modal.Body>
      </Modal>
    </div>
  );
};

export default LightBox;
