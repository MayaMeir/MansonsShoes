import React from 'react';
import OneProduct from './oneProduct';
import { Container, Col, Row, Form } from 'react-bootstrap';

import '../theme/theme.css';

function StorePage(props) {


    return <>
        <Container>
           { props.products.map((element, index) => {
               <Col xs={3}><OneProduct product={props.products[index]} /></Col>
           })}
        <Row style={{marginTop:"7px"}}>
                
                <Col xs={4}><h2>Current Catagory/Collection</h2></Col>
                <Col xs={4}></Col>
                <Col xs={3}><Form style={{width:"150px", fontSize:"16px"}}>
  <Form.Group controlId="exampleForm.SelectCustom">
    <Form.Control as="select" custom>
      <option>Top Rated</option>
      <option>Price High To Low</option>
      <option>Price Low To High</option>

    </Form.Control>
  </Form.Group>
</Form></Col>
            </Row>
            <Row>
            { props.products.map((element, index) => {
              return <Col xs={3} key={index}><OneProduct product={element} /></Col>
           })}
            </Row>
        </Container>
    </>

}

export default StorePage;





{/* <OneProduct /> */}