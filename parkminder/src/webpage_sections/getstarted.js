import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Map from '../components/map';
import Reminder from '../components/reminderform';


function GetStartedPage() {
  return (
    <Container fluid id='start'>
        <Row className='left-align'><h5>Get Started</h5></Row>
        <Row className='left-align'><h1>Set A Reminder</h1></Row>
        <Row>
            <Col>
                <Card>
                <Card.Header><Reminder></Reminder></Card.Header>
                <Card.Body>
                    <Card.Text>
                        <Map></Map>
                    </Card.Text>
                </Card.Body>
                </Card>
            </Col>
            <Col>
                <Card>
                <Card.Header><Reminder></Reminder></Card.Header>
                <Card.Body>
                    <Reminder></Reminder>
                </Card.Body>
                </Card>
            </Col>
        </Row>
    </Container>
  );
}

export default GetStartedPage;

/* 
  Citation for GetStartedPage
  Date: 10/12/2022

  Title: "Cards"
  Source URL: https://react-bootstrap.github.io/components/cards/

  Title: "Grid system"
  Source URL: https://react-bootstrap.github.io/layout/grid/
*/