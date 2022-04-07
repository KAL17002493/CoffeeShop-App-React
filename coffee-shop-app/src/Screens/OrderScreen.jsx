import React, { useEffect, useState } from 'react'
import {Button, Container, Row, Col} from 'react-bootstrap'

function OrderScreen() {

    const [count, setCount] = useState(0);
    const [prods, setProducts] = useState([]);

    useEffect(() => 
    {
    var products = JSON.parse(window.localStorage.getItem("products"))
    if(!products)
    {
      products = []
    }
    setCount(products.length)
    },[])

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
            <Button  variant="success" className="w-100">Order <b>{count}</b></Button>
          </Row>
        {prods.map(prods => ( <Button variant="outline-warning" type="button" className="btn btn-outline-warning w-100 m-1 text-center">
                     <div>{prods.name}</div>
                     £ {prods.price}
                     </Button>))}
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
