import React, { useState } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import CartCard from './cartcard';
import './cart.css';

function Cart(props) {

    let [prods, updateProds] = useState(props.products);


    function RemoveItem(index) {
       prods.splice(index, 1);
       console.log(index);
        updateProds(prods);
    }   

    let sum=0;
    for (let product of props.products){
        sum +=parseInt(product.price)
    }


    return <div>
        <Container style={{marginTop:"15px"}}>
            <Row>
                <h1>Soon To Be Yours</h1>
            </Row>
            <Row>
                <Col xs="8">
                    {props.products.map((element, index) => {
                        return <CartCard product={element} key={index} index={index} onRemoveItem={RemoveItem} />
                    })}
                </Col>
                <Col xs="4">
                    <div id="cartDetails">
                    <h1>Order Summery</h1>
                    <h4>Number Of Items: {props.products.length}</h4>    
                    <h4>Total Amount: {sum}$</h4>  
                    <Button variant="outline-dark" id="checkoutBtn" href="./checkout">Continue To Checkout</Button>
  
                    </div>
                    </Col>
            </Row>
        </Container>
    </div>
}


export default Cart;