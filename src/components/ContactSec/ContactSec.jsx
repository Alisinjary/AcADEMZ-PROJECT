import React, { Component, Fragment } from 'react'

import { useRef } from 'react';
import emailjs from 'emailjs-com';




import { Col, Container, Form, Row,Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faEnvelope} from '@fortawesome/free-solid-svg-icons'
import {faPhone} from '@fortawesome/free-solid-svg-icons'


 const ContactSec = ()=> {


     
          const form = useRef();
          const sendEmail = (e) => {
               e.preventDefault();
           
               emailjs.sendForm('service_1dar8yw', 'template_ccahbyi', form.current, 'user_NzZqoZMsEj8ThSv8elFh8')
                 .then((result) => {
                   alert("massage send successful")
                   document.location.reload()

                 }, (error) => {
                     console.log(error.text);
                 });
             };

          return (
               <Fragment>
                    <Container className="mt-5">
                         <Row>
                              <Col lg={6} md={6} sm={12}>
     <h1 className="serviceName">Quick Connect</h1>

 
     <form ref={form} onSubmit={sendEmail}>
  <Form.Group  >
    <Form.Label>Your Name </Form.Label>
    <Form.Control name="from_name" type="text" placeholder="Enter Your Name" /> 
  </Form.Group>

  <Form.Group  >
    <Form.Label>Your Email </Form.Label>
    <Form.Control name="from_name" type="email" placeholder="Enter Your email" /> 
  </Form.Group>

  <Form.Group  >
    <Form.Label>Message  </Form.Label>
    <Form.Control name="message" as="textarea" rows={3} />
  </Form.Group>

   
   
  <Button variant="primary" type="submit">
    Submit
  </Button>
</form>

                              </Col>



                              <Col lg={6} md={6} sm={12}>
      <h1 className="serviceName">Discuss Now</h1>

      <p className="serviceDescription">
          6522 Baltimore National Pike CatonsVille, Califonia USA <br></br>
          <FontAwesomeIcon icon={faEnvelope}  /> Email : Academy@ele.com<br></br>
          <FontAwesomeIcon icon={faPhone}  /> Phone : 434343434<br></br>
     </p>

                              </Col>
                         </Row>
                    </Container>
               </Fragment>
          )
     }


export default ContactSec
