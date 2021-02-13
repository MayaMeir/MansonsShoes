import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import pic from './poster.png';
import './about.css';


function AboutPage() {

    return <div id="aboutPage">

        <Container>
            <Row id="row">
                <Col xs={4}></Col>
                <Col xs={4}><p id="aboutText">Hi, my name is Maya, and im the founder and creator of Manson's - Shoes That Kill.
                I started this site with people like me in mind - those who arent afraid to speak their mind and show their passion for arts through shoes.
                There isnt a single item in the store that I wouldn’t buy myself - and that's my goal - to create something that I truly believe in, and that I would enjoy as a customer.
                I hope you will have a great time scrolling around and finding the right pair for you.
                enjoy, Maya</p></Col>
                <Col xs={4}><img
                alt={"poster"}
                src={pic}
                width= "370px"
                style={{marginBottom: "10px", marginTop: "10px"}}

            /></Col>
            </Row>
        </Container>
    </div>



}

export default AboutPage;