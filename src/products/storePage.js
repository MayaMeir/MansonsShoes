import React from 'react';
import OneProduct from './oneProduct';
import { Container, Col, Row, Form, Button } from 'react-bootstrap';

import '../theme/theme.css';

function StorePage(props) {


    return <>
        <Container>
        <Row>
                <h2>Current Catagory</h2>
            </Row>
            <Row>
                <Col xs={3}><OneProduct products={props.products} /></Col>
                <Col xs={3}><OneProduct products={props.products} /></Col>
                <Col xs={3}><OneProduct products={props.products} /></Col>
                <Col xs={3}><OneProduct products={props.products} /></Col>
            </Row>
            <Row>
                <Col xs={3}><OneProduct products={props.products} /></Col>
                <Col xs={3}><OneProduct products={props.products} /></Col>
                <Col xs={3}><OneProduct products={props.products} /></Col>
                <Col xs={3}><OneProduct products={props.products} /></Col>
            </Row>            
            <Row>
                <Col xs={3}><OneProduct products={props.products} /></Col>
                <Col xs={3}><OneProduct products={props.products} /></Col>
                <Col xs={3}><OneProduct products={props.products} /></Col>
                <Col xs={3}><OneProduct products={props.products} /></Col>
            </Row>            
            <Row>
                <Col xs={3}><OneProduct products={props.products} /></Col>
                <Col xs={3}><OneProduct products={props.products} /></Col>
                <Col xs={3}><OneProduct products={props.products} /></Col>
                <Col xs={3}><OneProduct products={props.products} /></Col>
            </Row>
        </Container>
    </>

}

export default StorePage;





<OneProduct />