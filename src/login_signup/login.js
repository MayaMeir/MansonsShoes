import React from 'react';
import { useForm } from "react-hook-form";
import './login.css';
import {Button, Col, Form, Row } from 'react-bootstrap';
import bg from './image.jpg';
function Login(){

    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = data => console.log(data);


    return <div>
                <img src={bg} alt="bg" id="bg"/>

    <Row id="container">
        <Col xs="10" style={{display:"flex", justifyContent:"center"}}>
    <Form id="login_form" onSubmit={handleSubmit(onSubmit)}>
                <h3 style={{fontWeight:"bold"}}>Sign In</h3>

                <div className="form-group">
                    <label>Email address</label>
                    <input type="text" name="email" className="form-control" placeholder="Enter email" ref={register({ required: true, pattern: /^\S+@\S+$/i })}/>
                    {errors.email && <span style={{color:"red"}}>Email Must Be Valid!</span>}

                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" name="password" className="form-control" placeholder="Enter password" ref={register({ required: true })} />
                    {errors.password && <span style={{color:"red"}}>We keep you safe, please enter your password</span>}

                </div>

                

                <Button variant="outline-dark" block id="btn" type="submit">Submit</Button>
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