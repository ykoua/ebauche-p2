import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { Card } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
function Home() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <>
     <Card className="mb-6" style={{ maxWidth: '100%' }}>
      <div className="row g-0">
        <div className="col-md-5">
          <Card.Img src={require("./images/arr8.jpg")} className="img-fluid rounded-start" alt="..." style={{ width: '100%', height: 'auto' }} />
        </div>
        <div className="col-md-6">
          <Card.Body className="text-center">
            <Card.Text>
              Los Santos Basketball club est un club qui a été fondé en 1990 par Santos Angelo, le but principal est de pouvoir créer une équipe qui pourra représenter son pays et aussi de donner la chance aux jeunes de pouvoir s'épanouir et de commencer une carrière s'ils le veulent.
            </Card.Text>
          </Card.Body>
        </div>
      </div>
    </Card>

    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <Container className="d-flex align-items-center justify-content-center" style={{ height: '50vh', backgroundColor: '#1861A5' }}>
          <h1>First slide</h1>
        </Container>
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Container className="d-flex align-items-center justify-content-center" style={{ height: '50vh', backgroundColor: '#1861A5' }}>
          <h1>Second slide</h1>
        </Container>
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Container className="d-flex align-items-center justify-content-center" style={{height: '50vh', backgroundColor: '#1861A5' }}>
          <h1>Third slide</h1>
        </Container>
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

    </>
     
  );
}

export default Home;