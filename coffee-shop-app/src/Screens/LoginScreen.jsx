import React, {useState} from 'react';
import FormContainer from '../Components/FormContainer';
import {Form, Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';

function LoginScreen() {
return (
  <div className="bg-bannerSmall">
    <div className="backgroundColour-cover">
       <h1 className='py-3 text-center'></h1>

        <FormContainer>
          <Form>
            <Form.Group className='mt-5 mb-3' controlId='email'>
            <Form.Label>Email</Form.Label>
            <Form.Control type='email' placeholder='Email...'/>
            </Form.Group>

            <Form.Group className='mb-3' controlId='password'>
            <Form.Label>Password</Form.Label>
            <Form.Control type='email' placeholder='Email...'/>
            </Form.Group>

            <Button variant="success" className='w-100 mt-3'>Login</Button>
            </Form>
          </FormContainer>
      </div>

    <div className="fixed-bottom text-center  mb-5">
      <Button as={Link} to="/register" variant="info" className="btn btn-sm px-5">Register</Button>
    </div>
  </div>

  )
}

export default LoginScreen