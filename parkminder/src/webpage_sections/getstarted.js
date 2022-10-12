import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

function GetStartedPage() {
  return (
    <Container fluid id='start'>
        <Row className='left-align'><h5>Get Started</h5></Row>
        <Row className='left-align'><h1>Set A Reminder</h1></Row>
        <Row>
            <Col>
                <Card>
                <Card.Body>
                    <Card.Text>
                    FILL ME IN
                    </Card.Text>
                </Card.Body>
                </Card>
                <Card.Header as="h5">Map</Card.Header>
            </Col>
            <Col>
            <Card>
                <Card.Body>
                    <Card.Text>
                    FILL ME IN
                    </Card.Text>
                </Card.Body>
                </Card>
                <Card.Header as="h5">Form</Card.Header>
            </Col>
        </Row>
    </Container>
  );
}

export default GetStartedPage;