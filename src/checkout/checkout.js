import React from 'react';
import './checkout.css';
import {Button , Form, Row, Col, Container,InputGroup, FormControl } from 'react-bootstrap';

function Checkout(props){
let sum = 0;
const shipping = 20;
for (let product of props.products){
    sum += parseInt(product.price)
}

    return <>
    <Container>


  <Row>
    <Col xs="6">
    <Form style={{width:"85%", textAlign:"left", marginTop:"20px"}} id="checkoutForm">
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

  <Button variant="outline-dark" block id="btn">Submit</Button>

</Form>
    </Col>
    <Col xs="3">
    <div id="priceWithShipping">
    <h3>Order: {sum}$</h3> 
     <h3>Shipping: {shipping}$</h3> 
     <h2>Overall Amount: {sum + shipping}$</h2> 

      </div>
      </Col>
  </Row> 
</Container>
    </>
}

export default Checkout;