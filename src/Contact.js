import React, { useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import backgroundImage from './images/arr2.jpeg';

const Contact = () => {
  const backgroundStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    height: '100vh',
    padding: '50px'
  };
  const [selectedoption, setSelectedoption] = useState('Select option');

  const handleoptionSelection = (option) => {
    setSelectedoption(option);
  };


  return (
    <div style={backgroundStyle}>
      <div style={{ backgroundColor: '#1861A5', padding: '10px', color: 'black', display: 'inline-block', borderRadius: '10px' }}>
        <h4>LEAVE US A COMMENT OR CONTACT US</h4>
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

      <InputGroup className="mb-3" style={{backgroundColor: '#f8f9fa', borderRadius: '5px', marginTop: '50px'}}>
        <DropdownButton
          variant="outline-tertiary"
          title={selectedoption}
          className="rounded-start"
          id="input-group-dropdown-1"
        >
        <Dropdown.Item onClick={() => handleoptionSelection('Contact')}>Contact</Dropdown.Item>
        <Dropdown.Item onClick={() => handleoptionSelection('Comment')}>Comment</Dropdown.Item>
        </DropdownButton>
        <Form.Control aria-label="Text input with dropdown button" />
      </InputGroup>

      <InputGroup style={{marginTop: '50px'}}>
        <InputGroup.Text>Message</InputGroup.Text>
        <Form.Control as="textarea" aria-label="Message" />
      </InputGroup>
      <Button variant="primary" style={{ float: 'right', marginTop: '50px' }}>Send</Button>
    </div>
  );
}

export default Contact;
