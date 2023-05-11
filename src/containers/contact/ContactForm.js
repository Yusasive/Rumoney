import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import './Contact.css'

function ContactForm() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <Form  className='form' noValidate validated={validated} onSubmit={handleSubmit}>
      
        <Form.Group  as={Col} md="8" controlId="validationCustom01">
          <Form.Label>Name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Full Name"
            
          />
 <Form.Control.Feedback type="invalid">
            Please provide a valid Name.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="8" controlId="validationCustom02">
          <Form.Label>Email</Form.Label>
          <Form.Control
            required
            type="email"
            placeholder="Email Address"
            />
             <Form.Control.Feedback type="invalid">
            Please provide a valid Email Address.
          </Form.Control.Feedback>
        </Form.Group>
       
   
        <Form.Group as={Col} md="8" controlId="validationCustom03">
          <Form.Label>Message</Form.Label>
          <Form.Control type="text" placeholder="Message" required />
          <Form.Control.Feedback type="invalid">
            Please provide some Contents.
          </Form.Control.Feedback>
        </Form.Group>
      
       
      <Button as={Col} md="8" className="custom-btn" type="submit">Submit form</Button>
    </Form>
  );
}

export default ContactForm;
