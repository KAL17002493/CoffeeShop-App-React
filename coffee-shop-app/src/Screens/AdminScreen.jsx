import React from 'react'
import {Link} from 'react-router-dom'
import {Button} from 'react-bootstrap'

function AdminScreen() {
  return (
    <div className="bg-bannerSmall">
        <div className="backgroundColour-3 text-center">
            <h1 className="m-4 mb-5">Admin Screen</h1>

            <Button as={Link} to="/" variant="secondary" className="buttonWidth m-2">View Users</Button>
            <Button as={Link} to="/" variant="secondary" className="buttonWidth m-2">View Orders</Button>
            <Button as={Link} to="/" variant="secondary" className="buttonWidth m-2">View Bookings</Button>

        </div>
    </div>
  )
}

export default AdminScreen