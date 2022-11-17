import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Accordion from 'react-bootstrap/Accordion'


function FAQsPage() {
  return (
    <Container fluid id='faq'>
        <Row><h5>FAQs</h5></Row>
        <Row><h1>Resources</h1></Row>

        <Accordion className="faq-accordion"flush>
            <Accordion.Item eventKey="0">
                <Accordion.Header>FILL ME IN</Accordion.Header>
                <Accordion.Body>
                FILL ME IN
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
                <Accordion.Header>FILL ME IN</Accordion.Header>
                <Accordion.Body>
                FILL ME IN
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
                <Accordion.Header>FILL ME IN</Accordion.Header>
                <Accordion.Body>
                FILL ME IN
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
                <Accordion.Header>FILL ME IN</Accordion.Header>
                <Accordion.Body>
                FILL ME IN
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="4">
                <Accordion.Header>FILL ME IN</Accordion.Header>
                <Accordion.Body>
                FILL ME IN
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    </Container>
  );
}

export default FAQsPage;

/* 
  Citation FAQs Page
  Date: 10/12/2022

  Title: "Accordion"
  Source URL: https://react-bootstrap.github.io/components/accordion/

  Title: "Grid system"
  Source URL: https://react-bootstrap.github.io/layout/grid/
*/