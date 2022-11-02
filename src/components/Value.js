import { Container, Row, Col } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import design from '../images/design.png';
import development from '../images/development.png';
import copy from '../images/copywriting.png';
import seo from '../images/seo.png';

function Value() {
    return (
      <div className='value component'>
        <Container>
            <h2 className="section-header">Why Solidus?</h2>
            <Row>
                <Col>
                    <div className='value-card'>
                        <h3 className="blue">Design</h3>
                        <Image src={design} fluid />
                        <p>Websites optimized for search results so more people see your value</p>
                    </div>
                </Col>
                <Col>
                    <div className='value-card'>
                        <h3 className="blue">Design</h3>
                        <Image src={design} fluid />
                        <p>Websites optimized for search results so more people see your value</p>
                    </div>
                </Col>
                <Col>
                    <div className='value-card'>
                        <h3 className="blue">Design</h3>
                        <Image src={design} fluid />
                        <p>Websites optimized for search results so more people see your value</p>
                    </div>
                </Col>
                <Col>
                    <div className='value-card'>
                        <h3 className="blue">Design</h3>
                        <Image src={design} fluid />
                        <p>Websites optimized for search results so more people see your value</p>
                    </div>
                </Col>
            </Row>
        </Container>
      </div>
    );
  }
  
  export default Value;