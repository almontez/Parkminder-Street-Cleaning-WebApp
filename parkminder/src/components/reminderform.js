import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { createReminder } from '../utils/createreminder.js';


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


  const handleSave = async (event) => {
    event.preventDefault()

    // Close Form Modal
    setShow(false);

    // Call Function to Create and Send Reminder
    createReminder(fname, lname, remindDate, remindTime, email);

    // Clear form
    setFName('');
    setLName('');
    setEmail('');
    setCleanDays('');
    setCleanTime('');
    setStreet('');
    setRemindDate('');
    setRemindTime('');
  }

  return (
    <>
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
                    placeholder='Cleaning Time'
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
                    placeholder='Street Name'
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
    </>
  );
}

export default Reminder;

/* 
  Citation for Modal and Form
  Date: 10/17/2022
  
  Title: "Modals"
  Source URL: https://react-bootstrap.github.io/components/modal/
*/