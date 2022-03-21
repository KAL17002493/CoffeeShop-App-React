import React from 'react'
import {Form, Button} from 'react-bootstrap'

function ContactScreen() {
  return (
    <div className="bg-banner">
    <div className="backgroundColour-1">
        <h1 className="text-center mt-3">Contact Us</h1>
      <div className="customFont-1 text-center mt-5 m-3">
          <p>Historically the Cloakroom's quirky & unique creative space has been used for all manner of functions including as a venue for intimate gigs, numerous art exhibitions & even as a film set!</p>
          <p>We offer our one of a kind space for private hire, as a venue for your function or event - whatever you imagine! Just fill out the contact form below with details of your event or call us directy and we'll get back to you as soon as possible to discuss possible options.</p>
      </div>
    </div>
    
    <div className="backgroundColour-2">
      <div className="mt-5 m-3">
        <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className="text-light">First Name</Form.Label>
                <Form.Control type="string" placeholder="Name" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className="text-light">Last Name</Form.Label>
                <Form.Control type="string" placeholder="Last Name" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className="text-light">Email address</Form.Label>
                <Form.Control type="email" placeholder="Email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label className="text-light">Message</Form.Label>
                <Form.Control as="textarea" placeholder="Your Message" rows={3} />
            </Form.Group>

            <Button variant="primary" className='w-100 mt-3' type="submit">Submi</Button>
        </Form>
      </div>

      <div className="customFont-1">
        <h1 className="text-center mt-5">Or call us on</h1>
      <div className="text-center mt-2">
        <p className="m-0">Landline: 01117 74960928</p>
        <p className="m-0">Mobile: 07383891763</p>
        </div>
      </div>
    </div>

  </div>
  )
}

export default ContactScreen