import Container from 'react-bootstrap/Container';
import HeroImage from '../images/homepageimg.png';
import Image from 'react-bootstrap/Image'

function HomePage() {
  return (
    <Container fluid>
        <Image src={HeroImage} fluid="True"></Image>
    </Container>
  );
}

export default HomePage;