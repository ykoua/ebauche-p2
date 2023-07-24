import React, { useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import backgroundImage from './images/arr8.jpg';

const Booking = () => {
  const backgroundStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    height: '100vh',
    padding: '50px'
  };
  const [selectedCourt, setSelectedCourt] = useState('Select Court');

  const handleCourtSelection = (court) => {
    setSelectedCourt(court);
  };

  return (
    <div style={backgroundStyle}>
      <div style={{ backgroundColor: '#1861A5', padding: '10px', color: 'black', display: 'inline-block', borderRadius: '10px' }}>
        <h4>Book a court</h4>
      </div>

      <InputGroup className="mb-3" style={{marginTop: '70px'}}>
        <InputGroup.Text>First Name</InputGroup.Text>
        <Form.Control aria-label="First Name" />
      </InputGroup>

      <InputGroup className="mb-3" style={{marginTop: '50px'}}>
        <InputGroup.Text>Last Name</InputGroup.Text>
        <Form.Control aria-label="Last Name" />
      </InputGroup>

      <InputGroup className="mb-3" style={{marginTop: '50px'}}>
        <InputGroup.Text>Email</InputGroup.Text>
        <Form.Control aria-label="Email" />
      </InputGroup>

      <InputGroup className="mb-3" style={{backgroundColor: '#f8f9fa', borderRadius: '5px', marginTop: '50px', width: 'fit-content'}}>
      <InputGroup.Text>Court</InputGroup.Text>
      <DropdownButton
        variant="outline-tertiary"
        title={selectedCourt}
        className="rounded-end"
        id="input-group-dropdown-1"
      >
        <Dropdown.Item onClick={() => handleCourtSelection('Court 1')}>Court 1</Dropdown.Item>
        <Dropdown.Item onClick={() => handleCourtSelection('Court 2')}>Court 2</Dropdown.Item>
        <Dropdown.Item onClick={() => handleCourtSelection('Court 3')}>Court 3</Dropdown.Item>
        <Dropdown.Item onClick={() => handleCourtSelection('Court 4')}>Court 4</Dropdown.Item>
        <Dropdown.Item onClick={() => handleCourtSelection('Court 5')}>Court 5</Dropdown.Item>
      </DropdownButton>
    </InputGroup>

      <Button variant="primary" style={{ float: 'right', marginTop: '50px' }}>Checkout</Button>
    </div>
  );
}

export default Booking;
