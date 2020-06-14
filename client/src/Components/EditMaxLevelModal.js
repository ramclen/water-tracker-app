import React, {useState} from "react";
import ReactDOM from "react-dom";
import { Modal, Button, InputGroup, FormControl } from 'react-bootstrap';
import './modal.css'

const EditMaxLevelModal = ({ open, value, onClose, onUpdate }) => {
  const [maxValue, setMaxValue] = useState(value);
  
  const onClickUpdate = ()=> {
    onUpdate(maxValue)
  }

  return ReactDOM.createPortal((
    <>
      <Modal show={open} onHide={onClose}>
        <Modal.Header closeButton>
          <Modal.Title>Update Target Water</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Please enter your new water target below:
          
        </Modal.Body>
        <Modal.Footer>
          
        <InputGroup className="mb-3">
            <FormControl
              value={maxValue}
              onChange={form => setMaxValue(form.target.value)}
              placeholder="Recipient's username"
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
            />
            <InputGroup.Append>
              <InputGroup.Text id="basic-addon2">ml</InputGroup.Text>
            </InputGroup.Append>
          </InputGroup>
          <Button variant="primary" onClick={onClickUpdate}>
            Update
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  ), document.getElementById('modal'))
}

export default EditMaxLevelModal;