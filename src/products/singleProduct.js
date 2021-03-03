import React from 'react';
import {Container, Col, Row, Form, Button } from 'react-bootstrap';
import '../theme/theme.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { useParams } from 'react-router-dom';

function SingleProduct(props) {
    let stars = [];
    let {id}=useParams();
  
    let products = props.products;
    console.log(products);

   const product = products.find((item) => {
      return item.id == parseInt(id);
    })

    console.log(product);
    for (let i = 0; i < product.rating; i++) {
        stars.push( <FontAwesomeIcon  key={i} style={{ color: "yellow" }} icon={faStar} />);
    }
    let starsPara = <div>{stars}</div>;

    return <div><Container id="productPage">
    <Row>
      <Col><img
                alt={"logo"}
                src={product.mainPicSrc}
                width= "200px"
                style={{marginBottom: "10px"}}

            />
            
            <img
                alt={"logo"}
                src={product.mainPicSrc}
                width= "200px"
                style={{marginBottom: "10px"}}

            />
            <img
                alt={"logo"}
                src={product.mainPicSrc}
                width= "200px"
                style={{marginBottom: "10px"}}

            /></Col>
      <Col xs={6}>
      <img
                alt={"logo"}
                src={product.mainPicSrc}
                width= "450px"

            /> </Col>
      <Col id="details">
      <p id="prodName">{product.name}</p>
      <p id="prodName">{product.price}$</p>
      <p id="prodDescription">{product.description}</p>
      <div id="rating">
        {starsPara}
      </div>
    <div>
    <Form id="sizeForm">
  <Form.Group controlId="exampleForm.SelectCustom">
    <Form.Label>Choose Your Size</Form.Label>
    <Form.Control as="select" defaultValue="Choose...">
      <option>Choose...</option>
      <option value="36">36</option>
      <option value="37">37</option>
      <option value="38">38</option>
      <option value="39">39</option>
      <option value="40">40</option>
      <option value="41">41</option>
      <option value="42">42</option>
    </Form.Control>
  </Form.Group>
</Form>
    </div>
    <div>
    <Button variant="dark">Add To Cart</Button>
    </div>
      </Col>
    </Row>
  </Container>
  </div>;
}

export default SingleProduct;