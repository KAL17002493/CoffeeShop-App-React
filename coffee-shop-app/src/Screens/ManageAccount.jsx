import React from 'react'
import {Form, Button} from 'react-bootstrap'

function ManageAccount() {

  return (
    <div className="bg-bannerSmall">
        <div className="backgroundColour-cover text-center">
            <h1 className='py-3 text-center mt-5'>Manage Account</h1>

            <Form className="mx-3 mt-5">
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control type="email" placeholder={window.localStorage.getItem("firstName")} />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control type="email" placeholder={window.localStorage.getItem("lastName")} />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Control type="password" placeholder={window.localStorage.getItem("email")} />
              </Form.Group>
              <Button variant="primary" type="submit" className="w-100" >Save</Button>
            </Form>

        </div>
    </div>

  )
}

export default ManageAccount

/*
order number
list of products

controller

.include
*/