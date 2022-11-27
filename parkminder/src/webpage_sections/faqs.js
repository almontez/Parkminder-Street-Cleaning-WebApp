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
                <Accordion.Header>What is San Francisco Street Cleaning?</Accordion.Header>
                <Accordion.Body>
                Street cleaning is a part of any major city's sanitation practices. A specialized street 
                sweeping vehicle will drive through designated streets removing fine metal particles and other debris
                left on roads.  
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
                <Accordion.Header>What is the street cleaning schedule for San Francisco</Accordion.Header>
                <Accordion.Body>
                The street cleaning schedule varies by location. Data on street cleaning times can be found
                using the embeded map, posted on street signs, and on the <a href='https://sfpublicworks.org/services/mechanical-street-sweeping-and-street-cleaning-schedule'>
                SF Public Works website</a>. 
                <br></br>
                In general, streets are cleaned once a week to every other week within a block of two hours.
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
                <Accordion.Header>Why do I have to move my car during street cleaning?</Accordion.Header>
                <Accordion.Body>
                Street sweeping keeps roads safe and clean. Moving your vehicle during the designated street 
                cleaning times helps cleaners maintain efficiency and effectiveness. Blocked sections of road 
                prevent street sweeping vehicles from reaching and cleaning the area. Clear streets make for
                clean streets.
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
                <Accordion.Header>Can I park immediately after the street cleaner has passed?</Accordion.Header>
                <Accordion.Body>
                In short, yes. You may park your car on the cleaned street once the street cleaner has passed even if the posted 
                sweeping hours have not concluded. However, beware! The process can be tricky. You must make sure that the 
                mechanical vehicle that passed is indeed the final vehicle in the process.  
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="4">
                <Accordion.Header>Whoops! I forgot to move my car. How do I pay my ticket?</Accordion.Header>
                <Accordion.Body>
                If you forgot to move your car during street cleaning, the San Francisco Municipal Transportation Agency (SFMTA)
                will place a ticket on your vehcile. The ticket includes instructions for paying your fine. Additional, information
                can be found on the <a href='https://www.sfmta.com/getting-around/drive-park/citations'> SFMTA Citations</a> website.
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