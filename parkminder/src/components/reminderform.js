import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import * as reformatting from '../utils/reformating.js'

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

  // states for form
  const [fname, setFName] = useState('');               // first name
  const [lname, setLName] = useState('');               // last name
  const [email, setEmail] = useState('');               // email of user
  const [cleandays, setCleanDays] = useState('');       // cleaning days
  const [cleantimes, setCleanTime] = useState('');      // cleaning times
  const [street, setStreet] = useState('');             // parked street
  const [remindDate, setRemindDate] = useState('');     // date of reminder
  const [remindTime, setRemindTime] = useState('');     // time reminder sent


  const newReminderEvent = async (event) => {
    event.preventDefault()

    // Reformat data to meet email_micros requirements
    const name = await reformatting.reformatName(fname, lname);
    const date = await reformatting.reformatDate(remindDate, remindTime);

    // Make post request to parkminder web server
    const newReminder = {name, email, date}

    // Debug Code 
    console.log(`Create new reminder: ${JSON.stringify(newReminder)}`)
    alert(`Create new reminder: ${JSON.stringify(newReminder)}`);

    // Clear form
    setFName('')
    setLName('')
    setEmail('')
    setCleanDays('')
    setCleanTime('')
    setStreet('')
    setRemindDate('')
    setRemindTime('')
    
    // Close Form Modal
    setShow(false);
  }

  return (
    <>
      <Button variant='light' size='lg' onClick={handleShow}>
        Create Reminder
      </Button>

      <Modal size='lg' show={show} onHide={handleClose}>

        <Modal.Header closeButton>
          <Modal.Title>Create Street Cleaning Reminder</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form>
            <Form.Label>Cleaning Schedule (Days/Time/Street)</Form.Label>
            <Row>
              <Col>
              <Form.Group className="mb-3" controlId="reminderForm">
                  <Form.Control
                    required
                    type='text'
                    placeholder='Cleaning Days'
                    value={cleandays}
                    onChange={e => setCleanDays(e.target.value)}
                  />
              </Form.Group>
              </Col>
              <Col>
              <Form.Group className="mb-3" controlId="reminderForm">
                  <Form.Control
                    required
                    type='text'
                    placeholder='Cleaning Time Block'
                    value={cleantimes}
                    onChange={e => setCleanTime(e.target.value)}
                  />
              </Form.Group>
              </Col>
              <Col>
              <Form.Group className="mb-3" controlId="reminderForm">
                  <Form.Control
                    required
                    type='text'
                    placeholder='Street'
                    value={street}
                    onChange={e => setStreet(e.target.value)}
                  />
              </Form.Group>
              </Col>
            </Row>
            <br></br>
            <Form.Label>What is your first and last name?</Form.Label>
            <Row>
              <Col>
              <Form.Group className="mb-3" controlId="reminderForm">
                <Form.Control
                  required
                  type="text"
                  placeholder='First Name'
                  value={fname}
                  onChange={e => setFName(e.target.value)}
                  autoFocus
                />
              </Form.Group>
              </Col>
              <Col>
              <Form.Group className="mb-3" controlId="reminderForm">
                  <Form.Control
                    required
                    type="text"
                    placeholder='Last Name'
                    value={lname}
                    onChange={e => setLName(e.target.value)}
                    autoFocus
                  />
              </Form.Group>
              </Col>
            </Row>
            <br></br>
            <Form.Label id="reminder-question">When would you like to be reminded to move your vehicle?
              Plese enter a date and time below.
            </Form.Label>
            <Row>
              <Col>
              <Form.Group className="mb-3" controlId="reminderForm">
                <Form.Control
                  required
                  type="date"
                  value={remindDate}
                  onChange={e => setRemindDate(e.target.value)}
                  autoFocus
                />
              </Form.Group>
              </Col>
              <Col>
              <Form.Group className="mb-3" controlId="reminderForm">
                  <Form.Control
                    required
                    type="time"
                    value={remindTime}
                    onChange={e => setRemindTime(e.target.value)}
                    autoFocus
                  />
              </Form.Group>
              </Col>
            </Row>
            <br></br>
            <Form.Label>Where would you like your reminder to be sent? Please enter a valid email address</Form.Label>
            <Form.Group className="mb-3" controlId="reminderForm">
              <Form.Control
                required
                type="email"
                placeholder="name@example.com"
                value={email}
                onChange={e => setEmail(e.target.value)}
                autoFocus
              />
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