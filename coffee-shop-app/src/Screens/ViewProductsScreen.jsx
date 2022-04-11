import React, {useState, useEffect} from 'react'
import {Button, ListGroup} from 'react-bootstrap'

function ViewProductsScreen() {

    const[products, setProducts] = useState([]);
    const[loaded, setLoaded] = useState(false);
  
    useEffect(() => {
      //Gets all products from database
      fetch('https://localhost:7123/api/products')
        .then(res => res.json())
        .then(
          (result) => {
            setLoaded(true);
            setProducts(result);
          },
        )
    }, [])
    
    //if failed to fetch data shows Loading...
    if (!loaded)
    {
      return <div><h2 className="text-center m-5">Loading...</h2></div>
    }
    //Return screen if data fetches successfullt
    else {
  
    return (
  
    <div className="bg-bannerSmall">
      <div className="backgroundColour-cover-2 mt-5 text-center">
        <h1 className="text-center mt-5 mb-3">All Products</h1>

        <Button href="/user/admin/viewProducts/addProduct" variant="secondary" className="buttonWidth m-2">Add Product</Button>
  
        {products.map(products => (
              <div key={products.id}>
          <ListGroup as="ul" className="m-2 px-2">
            <ListGroup.Item as="li" active>
              {/*Outputs all products and their prices */}
            <div>
              {products.name}
            </div>
            </ListGroup.Item>
  
            <ListGroup.Item as="li">
              £ {products.price}
            </ListGroup.Item>        
  
          </ListGroup>
          </div>))}
      </div>
    </div>
    ) 
  }}

export default ViewProductsScreen