import Container from 'react-bootstrap/Container';
import carImg from '../images/contactInfo.png';

function ContactInfo() {
  return (
    <footer className='footer'>
        <h1 id='contactInfo'>CONTACT INFORMATION</h1>
        <p className='footerInfo'>Angela Montez<br></br>monteza@oregonstate.edu</p>
        <p className='reference'>Built using React, React-Bootstrap, Mapbox, and DataSF. Images Thanks to Freepik</p>
        <img className='bug' src={carImg} alt="Orange Volkswagon Beetle"></img>
    </footer>
  );
}

export default ContactInfo;