import React from 'react'
import {Link} from 'react-router-dom'
import {Button} from 'react-bootstrap'

function AccountScreen() {
  return (
    <div className="bg-bannerSmall">
        <div className="backgroundColour-1">
          {/*Displays Hello text with users name retrieved from local storage*/}
            <h1 className='py-3 text-center'>Hello {window.localStorage.getItem("firstName") + " " + window.localStorage.getItem("lastName")}</h1>

          {/*Adds Managed account and Click and collect button and logout button*/}
            <div className="text-center mt-5 mb-5">
                <Button as={Link} to="/user/account/manage" variant="success" className="buttonWidth mt-3">Manage Account</Button>
                <Button as={Link} to="/menu" variant="success" className="buttonWidth mt-3">Click and Collect</Button>
            </div>
            <div className="fixed-bottom text-center mb-5">
                <Button href="/login" variant="info" className="btn btn-sm px-5">Logout</Button>
            </div>
        </div>
    </div>
  )
}

export default AccountScreen