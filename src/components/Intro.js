import { Container } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import MountainTop from '../images/mountain-top.png'

function Intro() {
    return (
      <div className='intro'>
        <Image src={MountainTop} alt='mountain-top' fluid />
        <Container>
            Intro
        </Container>
      </div>
    );
  }
  
  export default Intro;
  