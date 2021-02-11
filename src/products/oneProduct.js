import React from 'react';
import HoverImage from "react-hover-image";
import '../theme/theme.css';
import {Card } from 'react-bootstrap';
import src from './productPics/smilyBoots/0TNAnKFNOQEvHcxzOc9UZHGjKeZHtJQu-33.jpg';


function OneProduct(props){

    return <>
    <Card id="prodCard">
    <HoverImage id="prodImg" src={props.product.mainPicSrc} hoverSrc={src} style={{height: '367px'}}/>
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