import React, { useState, useEffect } from 'react';
import HoverImage from "react-hover-image";
import '../theme/theme.css';
import { Card } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

function OneProduct(props) {
  const devURL = "http://localhost:3001";
  console.log(props.product);

let picShown = `${devURL}/images/${props.product.pic1}`;
  return <>
    <Card id="prodCard">
      <LinkContainer to={`/product/${props.product.id}`} style={{ height: '367px', cursor: "pointer" }}>
        {/* <HoverImage id="prodImg" src={`${devURL}/images/${props.product.pic1}`} hoverSrc={`${devURL}/images/${props.product.pic2}`} style={{height: '367px'}}/> */}
        <img
    src={`${devURL}/images/${props.product.pic1}`}
    onMouseOver={e => (e.currentTarget.src = `${devURL}/images/${props.product.pic2}`)}
    onMouseLeave={e => (e.currentTarget.src = `${devURL}/images/${props.product.pic1}`)}
  />
      </LinkContainer>
      <Card.Body>
        <Card.Title id="cardName">{props.product.name}</Card.Title>
        <Card.Text id="cardBrand">
          {props.product.brand}
        </Card.Text>
        <Card.Text>
          {props.product.price}$
    </Card.Text>
      </Card.Body>
    </Card>
  </>

}

export default OneProduct;