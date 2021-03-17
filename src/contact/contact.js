import React from 'react';
import bg from './gossip.jpg';
import './contact.css';
import { Form, Button, Row, Col } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import swal from 'sweetalert';


function Contact(){

  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = (data, r) => {
    swal("Thank You!", "Your Message Has Been Sent!", "success");
    const templateId = 'template_rkibsgs';
    const serviceID = 'my_gmail';
    sendFeedback(serviceID, templateId, { fullName: data.fullName, msg: data.msg, email: data.email })
    r.target.reset();
}

const sendFeedback = (serviceID, templateId, variables) => {
  window.emailjs.send(
      serviceID, templateId,
      variables
  ).then(res => {
      console.log('Email successfully sent!')
  })
      .catch(err => console.error('There has been an error.  Here some thoughts on the error that occured:', err))
}

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
    <Form id="contact-form" onSubmit={handleSubmit(onSubmit)}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" className="form-control" name="fullName" ref={register({ required: true })}/>
            {errors.fullName && <span style={{color:"red"}}>Must enter your name hun :)</span>}

          </div>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input type="text" className="form-control" aria-describedby="emailHelp" name="email" ref={register({ required: true, pattern: /^\S+@\S+$/i })}/>
            {errors.email && <span style={{color:"red"}}>Email Must Be Valid!</span>}

          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea className="form-control" rows="5" name="msg" ref={register({ required: true })} />
            {errors.msg && <span style={{color:"red"}}>What's on your mind?</span>}

          </div>
          <Button type="submit" variant="outline-dark" id="btn">Let's Talk!</Button>

        </Form>
    </div></Col>

    </Row>
    </>
}

export default Contact;