import React, { Component } from "react";
import { Modal } from "react-bootstrap";
class LightBox extends Component {
  state = {
    isOpen: false
  };
  handleToggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };
  render() {
    return (
      <div>
        <div onClick={() => this.handleToggle()}>{this.props.button}</div>
        <Modal show={this.state.isOpen} onHide={() => this.handleToggle()}>
          <Modal.Header closeButton />
          <Modal.Body>{this.props.children}</Modal.Body>
        </Modal>
      </div>
    );
  }
}

export default LightBox;
