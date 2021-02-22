import React, { useEffect, useState } from 'react';
import OneProduct from './oneProduct';
import { Container, Col, Row, Form } from 'react-bootstrap';

import '../theme/theme.css';

function StorePage(props) {

    let [prods, setSortProds] = useState(props.products);
    let [sortVal, setSortVal] = useState('initial');
    function ascend(){
      const sortedProds = prods.sort(function(a, b){return a.price - b.price})
      setSortProds([...sortedProds]);

  }

  function desc(){
    const sortedProdsDesc = prods.sort(function(a, b){return b.price - a.price})
    setSortProds([...sortedProdsDesc]);

  }


  const handleChanges = (selectedItem) => {
    setSortVal(selectedItem.target.value);
    if (selectedItem.target.value == 'Price High To Low'){
      desc();
    }

    if (selectedItem.target.value == 'Price Low To High'){
      ascend();
    }
  }

    return <>
        <Container>

        <Row style={{marginTop:"7px"}}>
                
                <Col xs={4}><h2>Current Catagory/Collection</h2></Col>
                <Col xs={4}></Col>
                <Col xs={3}><Form style={{width:"150px", fontSize:"16px"}}>
  <Form.Group controlId="exampleForm.SelectCustom">
    <Form.Control onChange={handleChanges} value={sortVal} as="select" custom>
      <option value="initial">Top Rated</option>
      <option value="Price High To Low">Price High To Low</option>
      <option value="Price Low To High">Price Low To High</option>

    </Form.Control>
  </Form.Group>
</Form></Col>
            </Row>
            <Row>
            { prods.map((element, index) => {
              return <Col xs={3} key={index}><OneProduct product={element}  /></Col>
           })}
            </Row>
        </Container>
    </>

}

export default StorePage;





{/* <OneProduct /> */}