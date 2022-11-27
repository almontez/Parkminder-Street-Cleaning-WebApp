import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';


function AboutPage() {
  return (
    <Container fluid id='about'>
        <Row><h5>About</h5></Row>
        <Row><h1>Because parking in SF is tiresome enough without <br></br> the fear of being ticketed</h1></Row>
        <Row>
            <Col sm={8}>
                    <p>Welcome to Parkminder!</p>
                    <p>Never again forget to move your parked car during those wearisome
                        street cleaning times in San Francisco, California. We'll send you 
                        an email reminder to move your car on your schedule and at your leisure. So, you'll 
                        never get another $85 minimum ticket for forgetting to move your car.
                    </p>
                    <p> We help you by providing a robust and searchable map of the San Francisco street cleaning 
                        schedule. All you have to do is scroll to "Set a Reminder." There you'll see 
                        a map of San Francisco. Zoom in. Locate yourself. Or search for the general location you parked
                        your car. Then click on the orange line at the approximate location of where you parked. 
                    </p>
                    <p>The street cleaning data for the location where you parked your car will appear in a pop-up on the map.
                        If no data appears, try clicking on the line again. Next, determine if you parked on the left or right side
                        of the street. If the street spans north to south, the left side of the street will be your left hand side 
                        while the right your right hand side. If the steet is horizontal, left orients to north and right to south. 
                    </p>
                    <p>Use this data to complete the reminder form next to the map. You can also elect to complete the form
                        by memory. Once the form is completed, setting a reminder is as easy as clicking save. Your reminder 
                        is logged in our system once it's saved and an email is sent to you on the specified date and time.
                    </p>
                    <p>There you go! You'll never get another $85 ticket with Parkminder.
                    </p>
            </Col>
            <Col>
            <Card id="instructions">
                <Card.Header as="h5">INSTRUCTIONS</Card.Header>
                <Card.Body>
                    <Card.Text>
                    <p>Here is a recap of the instructions.</p>
                    <p> Quick & Clean.</p>
                    <ul>
                        <li>Go to the map</li>
                        <li>Find where you parked</li>
                        <li>Click on the orange line</li>
                        <li>Review the street cleaning data</li>
                        <li>Did you park on the left or right side?</li>
                        <li>Copy the data into the reminder</li>
                        <li>Click Save</li>
                        <li>Get your email reminder</li>
                        <li>Move your parked car</li>
                        <li>Never get a street cleaning ticket again</li>
                    </ul>
                    </Card.Text>
                </Card.Body>
                </Card>
            </Col>
        </Row>
    </Container>
  );
}

export default AboutPage;

/* 
  Citation AboutPage
  Date: 10/12/2022

  Title: "Cards"
  Source URL: https://react-bootstrap.github.io/components/cards/

  Title: "Grid system"
  Source URL: https://react-bootstrap.github.io/layout/grid/
*/