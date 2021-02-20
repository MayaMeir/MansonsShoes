import React from 'react';
import './signup.css';
import {Button, Form } from 'react-bootstrap';
import bg from './dragparty.jpg';
function SignUp(){


    return <div id="container">
        <img src={bg} alt="bg" id="bg"/>
    <Form>
                <h1 style={{textAlign:"center"}}>Join The Party!</h1>

                <div className="form-group">
                    <label>First name</label>
                    <input type="text" className="form-control" placeholder="First name" />
                </div>

                <div className="form-group">
                    <label>Last name</label>
                    <input type="text" className="form-control" placeholder="Last name" />
                </div>

                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email" />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" />
                </div>

                <Button variant="outline-dark" block id="btn">Submit</Button>
                <p className="forgot-password text-right">
                    Already registered? <a href="/login">Sign In</a>
                </p>
            </Form>

    </div>
}

export default SignUp;