import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

{/* 
  Citation for following code:
  Date: 10/12/2022

  Title: "Cards"
  Source URL: https://react-bootstrap.github.io/components/cards/

  Title: "Grid system"
  Source URL: https://react-bootstrap.github.io/layout/grid/
*/}

function AboutPage() {
  return (
    <Container fluid id='about'>
        <Row><h5>About</h5></Row>
        <Row><h1>Tag Line</h1></Row>
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