import React from 'react';
import bg from './gossip.jpg';
import './contact.css';
import { Form, Button, Row, Col } from 'react-bootstrap';
function Contact(){

    return <>
            <img src={bg} alt="bg" id="bg"/>
<Row style={{width:"90%", marginTop:"30px"}}>
    <Col style={{marginTop:"60px"}}>
    <h1>Reach Out To Us!</h1>
    <h3>Something good? bad? You just want to gossip a bit?</h3>
    <h3>Hit us up! </h3>

    </Col>
    <Col>
    <div>
    <Form id="contact-form" >
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" className="form-control" />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input type="email" className="form-control" aria-describedby="emailHelp"  />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea className="form-control" rows="5"  />
          </div>
          <Button variant="outline-dark" id="btn">Let's Talk!</Button>

        </Form>
    </div></Col>

    </Row>
    </>
}

export default Contact;