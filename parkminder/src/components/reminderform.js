import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

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
  const [days, setDays] = useState('');
  const [start_hr, setStartHr] = useState('');
  const [end_hr, setEndHr] = useState('');

  const newReminderEvent = (event) => {
    event.preventDefault()
    const newReminder = { email, days, start_hr, end_hr };

    // Debug Code 
    console.log(`Create new reminder: ${JSON.stringify(newReminder)}`)
    alert(`Create new reminder: ${JSON.stringify(newReminder)}`);

    // Clear form
    setEmail('');
    setDays('');
    setStartHr('');
    setEndHr('');
    
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
            <Form.Group className="mb-3" controlId="reminderForm">
              <Row>
                <Col>
                  <Form.Label>Cleaning Days</Form.Label>
                  <Form.Control
                    required
                    type='text'
                    value={days}
                    onChange={e => setDays(e.target.value)}
                  />
                </Col>
                <Col>
                  <Form.Label>Start Time</Form.Label>
                    <Form.Control
                      required
                      type='text'
                      value={start_hr}
                      onChange={e => setStartHr(e.target.value)}
                    />
                </Col>
                <Col>
                  <Form.Label>End Time</Form.Label>
                    <Form.Control
                      required
                      type='text'
                      value={end_hr}
                      onChange={e => setEndHr(e.target.value)}
                    />
                </Col>
              </Row>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={newReminderEvent}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Reminder;