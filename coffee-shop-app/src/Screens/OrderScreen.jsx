import React, { useEffect, useState } from 'react'
import {Button, Container, Row, Col, ListGroup} from 'react-bootstrap'

function OrderScreen() {


    const [prods, setProducts] = useState([]);



    useEffect(() =>{
    var products = JSON.parse(window.localStorage.getItem("products"))
    if(products)
    {
    //create function to call api for products
    const fetchProducts = async() =>{
    //api call
    fetch('https://localhost:7123/api/products/cart', {
      method: 'POST',
      body: JSON.stringify(products),
      headers: {'Content-Type': 'application/json'}})
        .then(response => response.json())
        .then(data => {setProducts(data)})
        .catch(err => console.log(err))
    }
    fetchProducts()
    }},[])

  return (
    <div className="bg-bannerSmall">
        <div className="backgroundColour-1 text-center">

        <div>
          <Container className="text-center">
          <Row className="px-3 mt-2">
            <Button  variant="success" className="w-100">Order</Button>
          </Row>
        {prods.map(prods => ( <div key={prods.id} className="m- text-center">
          <ListGroup as="ul" className="m-2">
          <ListGroup.Item as="li">
                     <div>{prods.name} x </div>
                     <div></div>
                     
          </ListGroup.Item>
          </ListGroup>
                     </div>))}
          </Container>          
          </div>
        </div>
    </div>
  )
}

export default OrderScreen

/*
add basket
oder
send it to API
display the oder
*/
