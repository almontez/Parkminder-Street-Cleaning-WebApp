import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

function AboutPage() {
  return (
    <Container fluid id='about'>
        <Row>
            <h5>About</h5>
        </Row>
        <Row>
            <h1>Tag Line</h1>
        </Row>
        <Row>
            <Col>
                <Card>
                <Card.Header as="h5">DESCRIPTION</Card.Header>
                <Card.Body>
                    <Card.Text>
                    FILL ME IN
                    </Card.Text>
                </Card.Body>
                </Card>
            </Col>
            <Col>
            <Card>
                <Card.Header as="h5">PURPOSE</Card.Header>
                <Card.Body>
                    <Card.Text>
                    FILL ME IN
                    </Card.Text>
                </Card.Body>
                </Card>
            </Col>
            <Col>
            <Card>
                <Card.Header as="h5">INSTRUCTIONS</Card.Header>
                <Card.Body>
                    <Card.Text>
                    FILL ME IN
                    </Card.Text>
                </Card.Body>
                </Card>
            </Col>
        </Row>
    </Container>
  );
}

export default AboutPage;