import React from 'react'
import {Form, Button} from 'react-bootstrap'

function ViewUsersScreen() {
  return (
    <div className="bg-bannerSmall">
        <div className="backgroundColour-cover-2 text-center">
        <h1 className='py-3 text-center mt-5'>All User Accounts</h1>

        <Form className="mt-5 mx-3">
            <Form.Group className="mb-3">
                <Form.Select id="disabledSelect">
                    <option>Disabled select</option>
                </Form.Select>
            </Form.Group>
        </Form>
        </div>
    </div>
  )
}

export default ViewUsersScreen