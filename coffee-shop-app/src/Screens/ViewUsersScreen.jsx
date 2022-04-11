import React, {useEffect, useState} from 'react'
import {ListGroup} from 'react-bootstrap'

function ViewUsersScreen() {

  const[users, setUsers] = useState([]);
  const[loaded, setLoaded] = useState(false);

  useEffect(() => {

    //Gets all users in database    
    fetch('https://localhost:7123/api/auth')
      .then(res => res.json())
      .then(
        (result) => {
          setLoaded(true);
          setUsers(result);
        },
      )
  }, [])

  //if failed to fetch data shows Loading...
  if (!loaded)
  {
    return <div><h2 className="text-center m-5">Loading...</h2></div>
  }
  //Return screen if data fetches successfully
  else {

  return (

  <div className="bg-bannerSmall">
    <div className="backgroundColour-cover-2 mt-5 text-center">
      <h1 className="text-center mt-5 mb-3">All User Accounts</h1>
      {/*Outputs all users by name*/}
      {users.map(users => (
            <div key={users.id}>
        <ListGroup as="ul" className="m-2 px-2">
          <ListGroup.Item as="li" active>
          <div>
            {users.userName}
          </div>
          </ListGroup.Item>

          <ListGroup.Item as="li">
            {users.firstName + " " + users.lastName}
          </ListGroup.Item>        

        </ListGroup>
        </div>))}
    </div>
  </div>
  ) 
}}

export default ViewUsersScreen