import React, {useState} from 'react'
import {Form, Button} from 'react-bootstrap'
import FormContainer from '../Components/FormContainer'

function AddProductScreen() {

  const [name, SetName] = useState('')
  const [price, SetPrice] = useState(0)

  const createProduct = () =>
  {
    console.log("Button clicked")

    fetch('https://localhost:7123/api/products', {
      method: 'POST',
      header: {'Content-Type': 'application/json'},
        body: JSON.stringify({

          name: name,
          price: price
        })
    })
    .then(res => res.json())
    .then(data => console.log(data))
  }
  return (

    <div>
      <div>
        <div className="mt-5">AddProduct</div>

      <FormContainer>
          <Form>
            <Form.Group className='mt-5 mb-3' controlId='name'>
            <Form.Label className="text-light">Product Name</Form.Label>
            <Form.Control type='string' placeholder='Product name...' onChange={(e)=>SetName(e.target.value)}/>
            </Form.Group>

            <Form.Group className='mb-3' controlId='price'>
            <Form.Label className="text-light">Price</Form.Label>
            <Form.Control type='price' placeholder='3.10...' onChange={(e)=>SetPrice(e.target.value)}/>
            </Form.Group>

            <Button variant="success" className='w-100 mt-3' onClick={createProduct}>Save</Button>

            </Form>
          </FormContainer>
        
      </div>
    </div>

    
  )
}

export default AddProductScreen