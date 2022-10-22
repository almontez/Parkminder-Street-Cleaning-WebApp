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
  // states for modals: show and hide modal
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // states for form: email and schedule
  const [email, setEmail] = useState('');
  const [schedule, setSchedule] = useState('');

  const newReminderEvent = (event) => {
    event.preventDefault()
    const newReminder = { email, schedule };

    // Debug Code 
    console.log(`Create new reminder: ${JSON.stringify(newReminder)}`)

    // Close Form Modal
    setShow(false);
  }

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
                required
                type="email"
                placeholder="name@example.com"
                value={email}
                onChange={e => setEmail(e.target.value)}
                autoFocus
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="reminderForm"
            >
              <Form.Label>Street Cleaning Schedule</Form.Label>
              <Form.Control
                required
                type='input'
                value={schedule}
                onChange={e => setSchedule(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={newReminderEvent}>
            Save Reminder
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Reminder;