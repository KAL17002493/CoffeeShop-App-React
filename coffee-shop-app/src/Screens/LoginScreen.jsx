import React, {useState} from 'react';
import FormContainer from '../Components/FormContainer';
import {Form, Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';

function LoginScreen() {

    const [email, SetEmail] = useState('')
    const [password, SetPassword] = useState('')

    const login = async () =>
    {
        console.log('Button Clicked')

        fetch('https://localhost:7123/api/auth/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
                body: JSON.stringify({

                email: email,
                password: password
                })
            })
            .then(res => res.json())
            .then(data => {
                console.log(data)

              if (data.role == "admin") {
                window.localStorage.setItem('token', data.token)
                window.localStorage.setItem('name', data.firstName + ' ' + data.lastName)
                window.localStorage.setItem('role', data.role)
                window.location.href = '/user/admin'
              } 
              else if(data.token)
              {
                window.localStorage.setItem('token', data.token)
                window.localStorage.setItem('name', data.firstName + ' ' + data.lastName)
                window.localStorage.setItem('role', data.role)
                window.location.href = '/user/account'
              }
              else
              {
                  alert("Error in login")
              }
            })
            .catch(err => console.log(err))
    }

return (
  <div className="bg-bannerSmall">
    <div className="backgroundColour-cover">
       <h1 className='py-3 text-center'></h1>

        <FormContainer>
          <Form>
            <Form.Group className='mt-5 mb-3' controlId='email'>
            <Form.Label className="text-light">Email</Form.Label>
            <Form.Control type='email' placeholder='Email...' onChange={(e)=>SetEmail(e.target.value)}/>
            </Form.Group>

            <Form.Group className='mb-3' controlId='password'>
            <Form.Label className="text-light">Password</Form.Label>
            <Form.Control type='password' placeholder='Password...' onChange={(e)=>SetPassword(e.target.value)}/>
            </Form.Group>

            <Button variant="success" className='w-100 mt-3' onClick={login}>Login</Button>

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