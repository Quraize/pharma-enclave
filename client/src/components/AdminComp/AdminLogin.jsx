import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import './AdminLoginStyles.css'

import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

export default function AdminLogin() {

    useEffect(() => {
        AOS.init({
          duration : 1300,
          easing: 'ease-in-out-back'
        });
      }, []);
  return (
    <div className="adminlogin-main-sec">
        <div>
            <h1 className="adminlogin-self-heading" data-aos='fade-right'>PharmaEnclave</h1>
            <p className="adminlogin-self-para" data-aos='fade-left'>Admin Authentication</p>
        </div>
      <Form className="form-self">
        <Form.Group className="email-sec-self" controlId="formBasicEmail">
          <Form.Label className="email-label-self" data-aos='fade-right'>Email address</Form.Label>
          <Form.Control type="email" placeholder="someone@email.com" data-aos='fade-left'/>
        </Form.Group>

        <Form.Group className="password-sec" controlId="formBasicPassword" >
          <Form.Label className="password-label-self" data-aos='fade-right'>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" data-aos='fade-left'/>
        </Form.Group>
        <Button variant="secondary" type="submit" className="button-self" data-aos='fade-up'>
          Sign In
        </Button>
      </Form>
    </div>
  );
}
