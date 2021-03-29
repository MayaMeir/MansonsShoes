import React, { useEffect, useState } from 'react';
import OneProduct from './oneProduct';
import { Container, Col, Row, Form} from 'react-bootstrap';
import '../theme/theme.css';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import "./store.css";
import bg from './background.jpg';

function StorePage(props) {

  let {filter}=useParams();
  
  let products = [];
  let [prods, setSortProds] = useState([]);

  useEffect (()=> {
        const getData = async()=> {
          products = await axios.get(`http://localhost:3001/store/${filter}`) ;
          console.log(products.data);
          setSortProds(products.data);
        }
        getData();
}, [])

  let [sortVal, setSortVal] = useState('initial');
  function ascend() {
    const sortedProds = prods.sort(function (a, b) { return a.price - b.price })
    setSortProds([...sortedProds]);
  }

  function desc() {
    const sortedProdsDesc = prods.sort(function (a, b) { return b.price - a.price })
    setSortProds([...sortedProdsDesc]);
  }
  function topRating() {
    const sortedProdsDesc = prods.sort(function (a, b) { return b.rating - a.rating })
    setSortProds([...sortedProdsDesc]);
  }

  const handleChanges = (selectedItem) => {
    setSortVal(selectedItem.target.value);
    if (selectedItem.target.value == 'Price High To Low') {
      desc();
    }

    if (selectedItem.target.value == 'Price Low To High') {
      ascend();
    }
    if (selectedItem.target.value == 'Top Rated') {
      topRating();
    }
  }

  let displayFilter = filter[0].toUpperCase() +  filter.slice(1); 

return <>
    <img src={bg} alt="bg" id="storeBg"/>

    <Container>

      <Row style={{ marginTop: "7px", height: "50px" }}>

        <Col xs={4} >
          <div style={{ height: "50px", verticalAlign: "middle" , textAlign:"left"}}>
            <h2>{displayFilter}</h2>
          </div>
        </Col>
        <Col xs={4}></Col>
        <Col xs={3}><Form style={{ width: "150px", fontSize: "16px" }}>
          <Form.Group controlId="exampleForm.SelectCustom">
            <Form.Control onChange={handleChanges} value={sortVal} as="select" custom>
              <option value="Top Rated">Top Rated</option>
              <option value="Price High To Low">Price High To Low</option>
              <option value="Price Low To High">Price Low To High</option>

            </Form.Control>
          </Form.Group>
        </Form></Col>
      </Row>
      <Row>
        {prods.map((element, index) => {
          return <Col xs={3} key={index}><OneProduct product={element} /></Col>
        })}
      </Row>
    </Container>
  </>

}

export default StorePage;





