import React, { useState } from 'react';
import { Button, ButtonGroup } from 'react-bootstrap';
import HoverImage from "react-hover-image";
import src from '../products/productPics/smilyBoots/0TNAnKFNOQEvHcxzOc9UZHGjKeZHtJQu-33.jpg';
import './cart.css';

function CartCard(props) {

  let [counter, setCount] = useState(1);

  function add() {
    setCount(counter + 1);
  }
  function remove() {
    setCount(counter - 1);
  }


  return (<>
    <div className="card mb-3" style={{ width: '500px', textAlign: "left" }}>
      <div className="row no-gutters">
        <div className="col-md-4">
          <HoverImage id="prodImg" src={props.product.mainPicSrc} hoverSrc={src} style={{ height: '220px' }} />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h2 className="card-title">{props.product.name}</h2>
            <div className="card-text">
              <ButtonGroup aria-label="Basic example" id="quantity">
                <Button variant="secondary" onClick={remove} className="quanSelectors">-1</Button>
                <Button variant="secondary" disabled className="quanSelectors">{counter}</Button>
                <Button variant="secondary" onClick={add} className="quanSelectors">+1</Button>
              </ButtonGroup>
            </div>
            <p className="card-text">
              <small className="text-muted">{props.product.price}$</small>
              <Button variant="dark" style={{ float: "right" }} onClick={() => props.onRemoveItem(props.index)}>Remove</Button>
            </p>
          </div>
        </div>
      </div>
    </div>
  </>)


}

export default CartCard;
