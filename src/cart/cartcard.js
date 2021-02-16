import React from 'react';
import { Button } from 'react-bootstrap';
import HoverImage from "react-hover-image";
import src from '../products/productPics/smilyBoots/0TNAnKFNOQEvHcxzOc9UZHGjKeZHtJQu-33.jpg';

function CartCard(props){
    return(   <>
    <div className="card mb-3" style={{width: '500px', textAlign:"left"}}>
      <div className="row no-gutters">
        <div className="col-md-4">
        <HoverImage id="prodImg" src={props.product.mainPicSrc} hoverSrc={src} style={{height: '220px'}}/>
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h2 className="card-title">{props.product.name}</h2>
            <p className="card-text">
              Quantity: Not Yet
            </p>
            <p className="card-text">
              <small className="text-muted">{props.product.price}$</small>
              <Button variant="dark" style={{float:"right"}} onClick={ () => props.onRemoveItem(props.index)}>Remove</Button>
            </p>
          </div>
        </div>
      </div>
    </div>
    </>)
 
    
}

export default CartCard;
