import React, {useState} from 'react';
import FormContainer from '../Components/FormContainer';
import {Form, Button} from 'react-bootstrap'

function RegisterScreen() {

    const [sname, SetLastName] = useState('')
    const [fname, SetFirstName] = useState('')
    const [email, SetEmail] = useState('')
    const [password, SetPassword] = useState('')

    const registerUser = async () =>
    {
        console.log('Button Clicked')

        fetch('https://localhost:3000/api/auth/register', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
                body: JSON.stringify({

                firstName: fname,
                lastName: sname,
                email: email,
                password: password
                })
            })
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })
            .catch(err => console.log(err))

    }

    return (

        <div className="bg-banner">
            <div className="backgroundColour-cover">
        <h1 className='py-3 text-center'></h1>
    
        <FormContainer>
            <Form>
                <Form.Group className='mb-3' controlId='fname'>
                    <Form.Label>First Name</Form.Label>
                    <Form.Control type='string' placeholder='First Name...' onChange={(e)=>SetFirstName(e.target.value)} />
                </Form.Group>

                <Form.Group className='mb-3' controlId='lname'>
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control type='String' placeholder='Last Name...' onChange={(e)=>SetLastName(e.target.value)} />
                </Form.Group>

                <Form.Group className='mt-5 mb-3' controlId='email'>
                    <Form.Label>Email</Form.Label>
                    <Form.Control type='email' placeholder='Email...' onChange={(e)=>SetEmail(e.target.value)} />
                </Form.Group>

                <Form.Group className='mb-3' controlId='password'>
                    <Form.Label>Password</Form.Label>
                    <Form.Control type='password' placeholder='Password...' onChange={(e)=>SetPassword(e.target.value)} />
                </Form.Group>

                <Button varient='primary' className='w-100 mt-5' onClick={registerUser}>Sign Up</Button>
            </Form>
        </FormContainer>
            </div>
        </div>
    )
}
export default RegisterScreen