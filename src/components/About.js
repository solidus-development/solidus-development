import { Container, Button, Row, Col } from "react-bootstrap";
import Image from 'react-bootstrap/Image';
import profilePic from '../images/profile-pic.jpeg';

function About(props) {
    return (
      <div className='about component'>
        <Container>
            <div className="about-content">
                <h2 className='section-header'>About</h2>
                <Row>
                <Col sm={12} md={6}>
                <Image src={profilePic} fluid thumbnail/>
                </Col>
                <Col sm={12} lg={6}>
                <p>Hi, I'm Damon Pickett and I help individuals and small businesses establish themselves online. My father runs an excavating business and through his example I’ve come to see the entrepreneurial spirit as a light that guides humanity. I’ve made it my mission to help carry this light to the best of my ability. In December of 2021 I graduated from <a href='https://generalassemb.ly/?topic=&mkt_account_id=1056949875&mkt_campaign_id=18014985960&mkt_ad_group_id=143659597087&mkt_device_type=c&mkt_keyword=general%20assembly&mkt_matchtype=e&mkt_placement=&mkt_ad_id=616745080546&mkt_network=g&mkt_target_id=kwd-318741616&mkt_feed_item_id=&utm_source=google&utm_medium=paid-search-bra&utm_campaign=TS:TX:BRA:CAN:BR:GeneralAssembly:X:Exact&utm_content=campus-lead-lander&utm_term=general%20assembly&gclid=Cj0KCQiAj4ecBhD3ARIsAM4Q_jEZmYSWUIHBvuEHehCioQKghRW7P1mzoqdDGeg2Q1uk3vz9Kw49bFAaAikXEALw_wcB&gclsrc=aw.ds' target='_blank' rel='noreferrer'>General Assembly’s</a> Software Engineering Immersive and am now applying my skills to this mission. As well as being a developer, I pride myself on my communication skills. You know when you call a call center and an automated message says “This call may be monitored for quality and training purposes.”? Well I used to be the guy monitoring those calls. I’ve spent countless hours studying the way people interact and I’ve learned that the ability to listen is the most important ingredient in effective communication. You can expect me to take the time necessary to understand your situation and to complete a project specific to your needs. So if you have a passion, a business, or a mission that you want to share, please don’t hesitate to contact me for a free consultation.</p>
                  </Col>
                  </Row>
                <Button variant='dark' type='button' onClick={() => props.setModal(true)}>Contact</Button>
            </div>
        </Container>
      </div>
    );
  }
  
  export default About;