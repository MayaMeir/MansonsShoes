import React from 'react';
import './signup.css';
import {Button, Form } from 'react-bootstrap';
import bg from './dragparty.jpg';
import { useForm } from "react-hook-form";

function SignUp(){
    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = data => console.log(data);

    return <div id="container">
        <img src={bg} alt="bg" id="bg"/>
    <Form onSubmit={handleSubmit(onSubmit)}>
                <h1 style={{textAlign:"center"}}>Join The Party!</h1>

                <div className="form-group">
                    <label>First name</label>
                    <input type="text" name="firstName" className="form-control" placeholder="First name" ref={register({required: true, maxLength: 20})}/>
                    {errors.firstName && <span style={{color:"red"}}>Please enter yout name</span>}

                </div>

                <div className="form-group">
                    <label>Last name</label>
                    <input type="text" name="lastName" className="form-control" placeholder="Last name" ref={register({required: true, maxLength: 20})}/>
                    {errors.lastName && <span style={{color:"red"}}>Please enter yout name</span>}

                </div>

                <div className="form-group">
                    <label>Email address</label>
                    <input type="text" className="form-control" aria-describedby="emailHelp" name="email" ref={register({ required: true, pattern: /^\S+@\S+$/i })}/>
                     {errors.email && <span style={{color:"red"}}>Email Must Be Valid!</span>}
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" name="password" ref={register({required: true, minLength: 6})}  />
                    {errors.password && <span style={{color:"red"}}>password must be longer than 6 characters</span>}

                </div>

                <Button variant="outline-dark" block id="btn" type="submit">Submit</Button>
                <p className="forgot-password text-right">
                    Already registered? <a href="/login">Sign In</a>
                </p>
            </Form>

    </div>
}

export default SignUp;