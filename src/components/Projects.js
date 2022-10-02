import { Container, Row, Col } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import Card from 'react-bootstrap/Card';
import Button from "react-bootstrap/Button";

function Projects() {
    return (
      <div className='projects component'>
        <Container>
            <h2>Projects</h2>
            <Row>
                <Col>
                    <Card>
                        <Card.Img />
                        <Card.Body>
                            <Card.Title>Title</Card.Title>
                            <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
                            <Button variant='dark'>Site</Button>
                            <Button variant='dark'>Code</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
      </div>
    );
  }
  
  export default Projects;