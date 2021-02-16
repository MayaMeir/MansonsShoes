import React from 'react';
import './login.css';
import {Button, Col, Form, Row } from 'react-bootstrap';
import bg from './image.jpg';
function Login(){


    return <div>
                <img src={bg} alt="bg" id="bg"/>

    <Row id="container">
        <Col xs="10" style={{display:"flex", justifyContent:"center"}}>
    <Form id="login_form">
                <h3 style={{fontWeight:"bold"}}>Sign In</h3>

                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email" />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" />
                </div>

                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div>

                <Button variant="outline-dark" block id="btn">Submit</Button>
                <p className="forgot-password text-right">
                    Forgot <a href="#">password?</a>
                </p>
            </Form>
            </Col>


<Col xs="2">
    <div id="signupSection">
    <h2>Dont Have An Account?</h2>
    <h4>Come Join Us!</h4>
    <Button href="/signup" variant="outline-dark" size="lg">Sign Up</Button>
    </div>
    </Col>
    </Row>
    </div>
}

export default Login;