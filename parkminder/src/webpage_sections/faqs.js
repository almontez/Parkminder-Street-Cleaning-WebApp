import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

function FAQsPage() {
  return (
    <Container fluid id='faq'>
        <Row><h5>FAQs</h5></Row>
        <Row><h1>Resources</h1></Row>
        <Row>
            <Col>
                <Card>
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

export default FAQsPage;