import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Services = () => {
  return (
    <div>
      <div style={{ backgroundColor: '#1861A5', color: 'white', padding: '10px' }}>
        <h4>OUR SERVICES</h4>
      </div>

      <Card className="mb-6" style={{ maxWidth: '100%' }}>
      <div className="row g-0">
        <div className="col-md-5">
          <Card.Img src={require("./images/b1.png")} className="img-fluid rounded-start" alt="..." style={{ width: '100%', height: 'auto' }} />
        </div>
        <div className="col-md-6">
          <Card.Body className="text-center">
              <Card.Title>Book a court</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">See prices</Button>
            </Card.Body>
          </div>
        </div>
      </Card>

      <Card className="mb-6" style={{ maxWidth: '100%' }}>
      <div className="row g-0">
        <div className="col-md-5">
          <Card.Img src={require("./images/c2.jpeg")} className="img-fluid rounded-start" alt="..." style={{ width: '100%', height: '300px' }} />
        </div>
        <div className="col-md-6">
          <Card.Body className="text-center">
              <Card.Title>Book a training session</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">See prices</Button>
            </Card.Body>
          </div>
        </div>
      </Card>

      <Card className="mb-6" style={{ maxWidth: '100%' }}>
      <div className="row g-0">
        <div className="col-md-5">
          <Card.Img src={require("./images/T1.jpeg")} className="img-fluid rounded-start" alt="..." style={{ width: '100%', height: '300px' }} />
        </div>
        <div className="col-md-6">
          <Card.Body className="text-center">
              <Card.Title>Buy a basketball tournament ticket</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">See prices</Button>
            </Card.Body>
          </div>
        </div>
      </Card>



      <Card className="mb-6" style={{ maxWidth: '100%' }}>
      <div className="row g-0">
        <div className="col-md-5">
          <Card.Img src={require("./images/T2.jpg")} className="img-fluid rounded-start" alt="..." style={{ width: '100%', height: 'auto' }} />
        </div>
        <div className="col-md-6">
          <Card.Body className="text-center">
              <Card.Title>Organize a basketball tournament</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">See prices</Button>
            </Card.Body>
          </div>
        </div>
      </Card>
    </div>
  );
}

export default Services;
