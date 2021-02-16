import React from 'react';
import './checkout.css';
import {Button , Form, Row, Col, Container,InputGroup, FormControl } from 'react-bootstrap';

function Checkout(){


    return <>
    <Container>


  <Row>
    <Col>
    <Form style={{width:"85%", textAlign:"left"}}>
  <Form.Row>
    <Form.Group as={Col} controlId="formGridName">
      <Form.Control type="text" placeholder="First Name" />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridLastName">
      <Form.Control type="text" placeholder="Last Name" />
    </Form.Group>
  </Form.Row>

  <Form.Group controlId="formGridAddress1">
    <Form.Control placeholder="Address Line 1" />
  </Form.Group>

  <Form.Group controlId="formGridAddress2">
    <Form.Control placeholder="Address Line 2" />
  </Form.Group>

  <Form.Row>
    <Form.Group as={Col} controlId="formGridCity">
      <Form.Control placeholder="City" />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridState">
      <Form.Control as="select" defaultValue="Country">
        <option>Country</option>
        <option>...</option>
      </Form.Control>
    </Form.Group>

    <Form.Group as={Col} controlId="formGridZip">
      <Form.Control placeholder="Zip Code"/>
    </Form.Group>
  </Form.Row>

  <Form.Group id="formGridCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>

  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
    </Col>
    <Col>2 of 2</Col>
  </Row> 
</Container>
    </>
}

export default Checkout;