import { Container, Row, Col } from "react-bootstrap";
import Card from 'react-bootstrap/Card';
import Button from "react-bootstrap/Button";
import seaweasel from '../images/seaweasel.png';
import torbomb from '../images/torbombdesign.png';
import whitsteen from '../images/whitsteen.png';
import robopunks from '../images/robopunks806x401.jpeg'
import scifi from '../images/scifi-film-poster-club806x401.jpg';

function Projects() {
    return (
      <div className='projects component'>
        <Container>
            <h2 className='section-header'>Projects</h2>
            <Row>

                <Col className='projects-col' sm={12} md={6} lg={4}>
                <div className="card-frame">
                <Card border='dark'>
                        <Card.Body>
                            <Card.Title style={{ marginBottom: '20px'}}>Sea Weasel</Card.Title>
                            <Card.Img src={seaweasel} />
                            <Card.Text>Sea Weasel is a punk rock, nautical clothing line. This landing page collects users' emails who want to be notified of product releases.</Card.Text>
                            <div className='card-buttons'>
                                <a href='https://seaweasel.ca/' target='_blank' rel='noreferrer'><Button variant='dark'>Site</Button></a>
                                <a href='https://github.com/sea-weasel/sea-weasel.github.io' target='_blank' rel='noreferrer'><Button variant='dark'>Code</Button></a>
                            </div>
                        </Card.Body>
                    </Card>
                    </div>
                </Col>

                <Col className='projects-col' sm={12} md={6} lg={4}>
                <div className="card-frame">
                <Card border='dark'>
                        <Card.Body>
                            <Card.Title style={{ marginBottom: '20px'}}>Torbomb Design</Card.Title>
                            <Card.Img src={torbomb}/>
                            <Card.Text>Torbomb Designs is expanding possibilities in the world of paintball by creating accessories via 3D printing technology.</Card.Text>
                            <div className='card-buttons'>
                            <a href='https://torbombdesigns.bigcartel.com/' target='_blank' rel='noreferrer'><Button variant='dark'>Site</Button></a>
                            </div>
                        </Card.Body>
                    </Card>
                </div>
                </Col>

                <Col className='projects-col' sm={12} md={6} lg={4}>
                <div className="card-frame">
                <Card border='dark'>
                        <Card.Body>
                            <Card.Title style={{ marginBottom: '20px', fontSize: '1.2em'}}>The Whitsteen Project</Card.Title>
                            <Card.Img src={whitsteen}/>
                            <Card.Text>The Whitsteen Project is a mock NFT project based on the artwork of Whitsteen. This app records transactions on the Ethereum testnet.</Card.Text>
                            <div className='card-buttons'>
                            <a href='https://damonpickett.github.io/whitsteen-project/' target='_blank' rel='noreferrer'><Button variant='dark'>Site</Button></a>
                            <a href='https://github.com/damonpickett/whitsteen-project' target='_blank' rel='noreferrer'><Button variant='dark'>Code</Button></a>
                            </div>
                        </Card.Body>
                    </Card>

                    
                    </div>
                </Col>
                

                <Col className='projects-col' sm={12} md={6} lg={4}>
                <div className="card-frame">
                <Card border='dark'>
                        <Card.Body>
                            <Card.Title style={{ marginBottom: '20px', fontSize: '1.2em'}}>RoboPunks NFT</Card.Title>
                            <Card.Img src={robopunks} />
                            <Card.Text>My Full Mint Website allows users to connect their Ethereum wallets and mint a RoboPunks NFT token on the Goerli Testnet.</Card.Text>
                            <div className='card-buttons'>
                            <a href='https://damonpickett.github.io/full-mint-website/' target='_blank' rel='noreferrer'><Button variant='dark'>Site</Button></a>
                            <a href='https://github.com/damonpickett/full-mint-website' target='_blank' rel='noreferrer'><Button variant='dark'>Code</Button></a>
                            </div>
                        </Card.Body>
                    </Card>
                    </div>
                </Col>

                <Col className='projects-col' sm={12} md={6} lg={4}>
                <div className="card-frame">
                <Card border='dark'>
                        <Card.Body>
                            <Card.Title style={{ marginBottom: '20px', fontSize: '1.2em'}}>Sci-fi Film Poster Club</Card.Title>
                            <Card.Img src={scifi} />
                            <Card.Text>The Sci-Fi Film Poster Club allows users to connect their Ethereum wallets and mint ERC721 tokens on the Rinkeby Testnet.</Card.Text>
                            <div className='card-buttons'>
                            <a href='https://damonpickett.github.io/sffpc/#/' target='_blank' rel='noreferrer'><Button variant='dark'>Site</Button></a>
                            <a href='https://github.com/damonpickett/sffpc' target='_blank' rel='noreferrer'><Button variant='dark'>Code</Button></a>
                            </div>
                        </Card.Body>
                    </Card>
                    </div>
                </Col>
                
            </Row>
        </Container>
        <div id='contact'></div>
      </div>
    );
  }
  
  export default Projects;