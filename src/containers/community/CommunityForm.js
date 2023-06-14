import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function CommunityForm() {
  return (
    <Form>
      
        <Form.Group className='mb-3' controlId="formGridFirstName">
          <Form.Label>First Name</Form.Label>
          <Form.Control type="text" placeholder="Yuusuf" />
        </Form.Group>

        <Form.Group className='mb-3' controlId="formGridPassword">
          <Form.Label>Last Name</Form.Label>
          <Form.Control type="text" placeholder="Abdullahi" />
        </Form.Group>
      

      <Form.Group className="mb-3" controlId="formGridLastName">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="example123@gmail.com" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formGridDateOfBirth">
        <Form.Label>Date of Birth</Form.Label>
        <Form.Control type="date" placeholder="20 of June, 2023" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="Country">
        <Form.Label>Country</Form.Label>
        <Form.Control type="text" placeholder="Turkey" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formGridGender">
        <Form.Label>Gender</Form.Label>
        <Form.Control type="text" placeholder="Female" />
      </Form.Group>


      <Form.Group className="mb-3" id="formGridCheckbox">
        <Form.Label>What Would You Like To Receive From Us?</Form.Label>
        <Form.Check type="checkbox" label="Job opportunities" />
        <Form.Check type="checkbox" label="Resources" />
        <Form.Check type="checkbox" label="Scholarships" />
        <Form.Check type="checkbox" label="Build connections" />
      </Form.Group>

      <Button className="d-grid" size='lg' variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default CommunityForm;
