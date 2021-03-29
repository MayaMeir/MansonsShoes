import React from 'react';
import './checkout.css';
import { useForm } from "react-hook-form";
import bg from './checkoutbg.jpg';
import {Button , Form, Row, Col, Container,InputGroup, FormControl } from 'react-bootstrap';
import PayPalBtn from '../paypal/paypalbtn';

function Checkout(props){
let sum = 0;
const shipping = 20;
for (let product of props.products){
    sum += parseInt(product.price)
}



const paymentHandler = (details, data) => {
  console.log(details, data);
}

    return <>
    <img src={bg} alt="bg" id="bg"/>
    <Container>
  <Row>
    <Col xs="6">
    <h1 style={{marginTop:"150px"}}>Thank You Girl!</h1>
    </Col>
    <Col xs="3">
    <div id="priceWithShipping">
    <h3>Order: {sum}$</h3> 
     <h3>Shipping: {shipping}$</h3> 
     <h2>Overall Amount: {sum + shipping}$</h2> 

      </div>
      <div style={{
    marginLeft: "150px",
    marginTop: "30px"
}}>
      <PayPalBtn
                    amount = {sum + shipping}
                    currency = {'USD'}
                    onSuccess={paymentHandler}/>
      </div>
      </Col>
  </Row> 
</Container>
    </>
}

export default Checkout;