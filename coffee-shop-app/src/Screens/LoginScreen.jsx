import React from 'react'
import {Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'

function LoginScreen() {
  return (
    <div>
        <Button as={Link} to="/register" variant="light" className="px-5">Register</Button>
    </div>

  )
}

export default LoginScreen