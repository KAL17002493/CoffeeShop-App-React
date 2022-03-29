import React from 'react'
import {Link} from 'react-router-dom'
import {Button} from 'react-bootstrap'

function AccountScreen() {
  return (
    <div className="bg-bannerSmall">
        <div className="backgroundColour-1">
            <h1 className='py-3 text-center'>Hello {window.localStorage.getItem("name")}</h1>

            <div className="text-center mt-5 mb-5">
                <Button as={Link} to="/user/account/manage" variant="success" className="buttonWidth mt-3">Manage Account</Button>
                <Button as={Link} to="/" variant="success" className="buttonWidth mt-3">Click and Collect</Button>
                <Button as={Link} to="/" variant="success" className="buttonWidth mt-3">Leave a Review</Button>
            </div>

            <div className="fixed-bottom text-center mb-5">
                <Button as={Link} to="/home" variant="info" className="btn btn-sm px-5">Logout</Button>
            </div>
        </div>
    </div>
  )
}

export default AccountScreen