import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import HeroImage from '../images/homepageimg.png';
import Image from 'react-bootstrap/Image'

function HomePage() {
  return (
    <Container fluid>
      <Row>
        <Col>
          <Image src={HeroImage} fluid="True"></Image>
        </Col>
      </Row>
    </Container>
  );
}

export default HomePage;