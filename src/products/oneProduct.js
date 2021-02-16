import React from 'react';
import HoverImage from "react-hover-image";
import '../theme/theme.css';
import {Card } from 'react-bootstrap';
import src from './productPics/smilyBoots/0TNAnKFNOQEvHcxzOc9UZHGjKeZHtJQu-33.jpg';
import {LinkContainer} from 'react-router-bootstrap';

function OneProduct(props){
    return <>
    <Card id="prodCard">
      <LinkContainer to={'/product'}style={{height: '367px'}}>
    <HoverImage id="prodImg" src={props.product.mainPicSrc} hoverSrc={src} style={{height: '367px'}}/>
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