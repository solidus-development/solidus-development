import { Container, Row, Col } from "react-bootstrap";
import Stack from "react-bootstrap/Stack";

function Social() {
  return (
    <div className="social component">
      <Container>
        <Row>
            <Col sm={12} md={6}>
              <h3>Social</h3>
              <div className="social-content">
                <Stack direction="horizontal" className='social-stack'>
                  <a href='https://www.linkedin.com/in/damon-pickett/' target='_blank' rel='noreferrer'><i class="devicon-linkedin-plain"></i></a>

                  <a href='https://github.com/damonpickett' target='_blank' rel='noreferrer'><i class="devicon-github-original"></i></a>

                  <a href='https://twitter.com/Damon_Pickett' target='_blank' rel='noreferrer'><i class="devicon-twitter-original"></i></a>
                </Stack>
              </div>
          </Col>
          <Col sm={12} md={6}>
            <h3>Credits</h3>
            <ul className='credit-list'>
              <li><a href="https://www.flaticon.com/free-icons/graphic-design" title="graphic design icons">Graphic design icons created by Freepik - Flaticon</a></li>
              <li><a href="https://www.flaticon.com/free-icons/code" title="code icons">Code icons created by Icongeek26 - Flaticon</a></li>
              <li><a href="https://www.flaticon.com/free-icons/copywriting" title="copywriting icons">Copywriting icons created by Freepik - Flaticon</a></li>
              <li><a href="https://www.flaticon.com/free-icons/marketing" title="marketing icons">Marketing icons created by monkik - Flaticon</a></li>
            </ul>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Social;
