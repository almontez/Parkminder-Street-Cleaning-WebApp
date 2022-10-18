import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

{/* 
  Citation for Modal and Form
  Date: 10/17/2022
  
  Title: "Modals"
  Source URL: https://react-bootstrap.github.io/components/modal/
*/}

function Reminder() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant='light' size='lg' onClick={handleShow}>
        Create Reminder
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Create Street Cleaning Reminder</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="reminderForm">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                autoFocus
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="reminderForm"
            >
              <Form.Label>Street Cleaning Schedule</Form.Label>
              <Form.Control as="input" />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Reminder
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Reminder;