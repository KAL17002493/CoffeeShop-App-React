import React, {useEffect, useState} from 'react'
import { Container, Row, Col, Button} from 'react-bootstrap'
import {Link} from "react-router-dom"
import MenuDrinkImg from "../img/coffee-cup (1).png"
import MenuFoodImg from "../img/cupcake.png"

function addToBasket(id, name)
{
  var products = JSON.parse(window.localStorage.getItem("products"))
  if(!products)
  {
    products = []
  }
  products.push(id)
  window.localStorage.setItem("products", JSON.stringify(products))

  console.log(id + " " + name)
}

function MenuScreen() {

  const [searchTerm, setSearchTerm] = useState('')

  const[products, setProducts] = useState([]);
  const[loaded, setLoaded] = useState(false);

  useEffect(() => {

    fetch('https://localhost:7123/api/products')
      .then(res => res.json())
      .then(
        (result) => {
          setLoaded(true);
          setProducts(result);
        },
      )
  }, [])

  if (!loaded)
  {
    return <div><h2 className="text-center m-5">Loading...</h2></div>
  }
  else {

  return (
    <div className="bg-banner">
      <div className="backgroundColour-1">
        <h1 className="text-center mt-3">Menu</h1>

        <Container>
            <Row className="mt-5">
                <Col className="text-center"><div className="btn btn-warning"><h6>Drinks</h6><img className=" mt-1" src={MenuDrinkImg} alt="MenuDrinkImg" width={80}/></div></Col>
                <Col className="text-center"><div className="btn btn-warning"><h6>Food</h6><img className="mt-1" src={MenuFoodImg} alt="MenuFoodImg" width={80}/></div></Col>
            </Row>
         </Container>

         <div className="form-outline text-center m-3 mt-5">
          <input type="search" id="form1" className="form-control" placeholder="Search Item" aria-label="Search" onChange={event => {setSearchTerm(event.target.value);}}/>
          <div className="text-center mt-3">
            <Button as={Link} to="/checkOut" variant="success" className="w-100">Check out</Button>
          </div>
        </div>
         
          
         

      </div>

      <div className="backgroundColour-2">
          <Container className="text-center">
          <h1 className="text-center mt-3">Drinks</h1>
            <Row>
            <h4 className="text-center mt-4 mb-4">Coffee</h4>

              <Row>
                <Col className="text-center">
                {products.filter((products) => {
                if (searchTerm == "") 
                {
                  return products
                }
                else if (products.name.toLowerCase().includes(searchTerm.toLowerCase()))
                {
                  return products
                }
                }).map(products => ( <Button variant="outline-warning" type="button" className="btn btn-outline-warning w-100 m-1" onClick={ e => addToBasket (products.id, products.name)} key={products.id}>
                     <div>{products.name}</div>
                     £ {products.price}
                     </Button>))}
                </Col>
              </Row>
            </Row>
                
            </Container>
      </div>

    </div>
  ) 
}}

export default MenuScreen