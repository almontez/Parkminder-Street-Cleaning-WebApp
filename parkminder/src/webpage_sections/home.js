import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import HeroImage from '../images/homepageimg.png';
import Image from 'react-bootstrap/Image'

function HomePage() {
  return (
    <Image id="banner" src={HeroImage} fluid="True"></Image>
  );
}

export default HomePage;