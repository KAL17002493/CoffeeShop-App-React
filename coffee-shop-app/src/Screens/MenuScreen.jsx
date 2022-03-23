import React from 'react'
import { Container, Row, Col, Button} from 'react-bootstrap'
import {Link } from "react-router-dom"
import MenuDrinkImg from "../img/MenuDrinkImg.png"
import MenuFoodImg from "../img/MenuFoodImg.png"

function MenuScreen() {
  return (
    <div className="bg-banner">
      <div className="backgroundColour-1">
        <h1 className="text-center mt-3">Menu</h1>

        <Container>
            <Row className="mt-5">
                <Col><div className="menuItem text-center"><h6>Drinks</h6><img className="mt-1" src={MenuDrinkImg} alt="MenuDrinkImg" width={80}/></div></Col>
                <Col><div className="menuItem text-center"><h6>Food</h6><img className="mt-1" src={MenuFoodImg} alt="MenuFoodImg" width={80}/></div></Col>
            </Row>
         </Container>

         <div class="form-outline text-center m-3 mt-5">
          <input type="search" id="form1" class="form-control" placeholder="Search Item" aria-label="Search" />
          <div className="text-center mt-3">
            <Button as={Link} to="/" variant="success" className="w-100">Check out</Button>
          </div>
        </div>
         
          
         

      </div>

      <div className="backgroundColour-2">
          <Container className="text-center">
          <h1 className="text-center mt-3">Drinks</h1>
            <Row>
            <h4 className="text-center mt-4 mb-4">Coffee</h4>

              <Row><Col><button type="button" class="btn btn-outline-warning w-100">Espresso</button></Col></Row>
              <Row><Col><button type="button" class="btn btn-outline-warning w-100">Cappucion</button></Col></Row>
              <Row><Col><button type="button" class="btn btn-outline-warning w-100">Latte</button></Col></Row>
              <Row><Col><button type="button" class="btn btn-outline-warning w-100">Americano</button></Col></Row>
              <Row><Col><button type="button" class="btn btn-outline-warning w-100">Mocchiato</button></Col></Row>
              <Row><Col><button type="button" class="btn btn-outline-warning w-100">Hot Chocolate</button></Col></Row>
            </Row>
                
            <Row className="mt-4">

            </Row>

            <Row className="mt-4">

            </Row>
            </Container>
      </div>

    </div>
  )
}

export default MenuScreen