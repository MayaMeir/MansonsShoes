import React, { useEffect, useState } from 'react';
import { Container, Col, Row, Form, Button } from 'react-bootstrap';
import '../theme/theme.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function SingleProduct(props) {
  const devURL= "http://localhost:3001";

  let stars = [];
  let { id } = useParams();
  let products = [];
  let [prods, setSortProds] = useState([]);
  let [loading, setLoading] = useState(true);
  let [product, setProduct] = useState({});

  useEffect(() => {
     async function getData () {
      products = await axios.get('http://localhost:3001/store/all');
    console.log('in singleProduct');
      setSortProds(products.data);
      const prod = (products.data.find((item) => {
        return item.id == id;
      }))
      setProduct(prod);
      setLoading(false); 
    }
    getData();
  }, [])


  let starsPara;

  if (!loading) {
    for (let i = 0; i < product.rating; i++) {
      stars.push(<FontAwesomeIcon key={i} style={{ color: "yellow" }} icon={faStar} />);
    }
    starsPara = <div>{stars}</div>;
  }
  return (loading ? <div>{'loading'} </div> :
    <div><Container id="productPage">
      <Row>
        <Col><img
          alt={"logo"}
          src={`${devURL}/images/${product.pic1}`}
          width="200px"
          style={{ marginBottom: "10px" }}

        />

          <img
            alt={"logo"}
            src={`${devURL}/images/${product.pic2}`}
            width="200px"
            style={{ marginBottom: "10px" }}

          />
          <img
            alt={"logo"}
            src={`${devURL}/images/${product.pic3}`}
            width="200px"
            style={{ marginBottom: "10px" }}

          /></Col>
        <Col xs={6}>
          <img
            alt={"logo"}
            src={`${devURL}/images/${product.pic1}`}
            width="450px"

          /> </Col>
        <Col id="details">
          <p id="prodName">{product.name}</p>
          <p id="prodName">{product.price}$</p>
          <p id="prodDescription">{product.description}</p>
          <div id="rating">
            {starsPara }
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
    </div>)

}

export default SingleProduct;