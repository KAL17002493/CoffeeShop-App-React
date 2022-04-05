import React, {useState} from 'react'
import {Form, Button} from 'react-bootstrap'
import FormContainer from '../Components/FormContainer'
//admin.admin@admin.com
//Admin123!
function AddProductScreen() {

  const [name, SetName] = useState('')
  const [price, SetPrice] = useState(0)
  const [image, SetImage] = useState('')
  const [description, SetDescription] = useState('')

  const createProduct = async () =>
  {
    var file = document.getElementById("image")['files'][0]

    var reader = new FileReader()
    reader.onloadend = () => {
        SetImage(reader.result)
    }
    reader.readAsDataURL(file)

    console.log(image)
    await fetch('https://localhost:7123/api/products', 
    {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            Name: name,
            Description: description,
            Price: price,
            Image: image
        })
    })
   .then(response => response.json())
   .catch((error) => {
        console.error('error', error)
   })
    

}

  return (

    <div className="bg-bannerSmall">
      <div className="backgroundColour-cover-2 mt-5">
      <h1 className='py-3 text-center mt-2'>Add Product</h1>

      <FormContainer>
          <Form id="upload">
            <Form.Group className='mt-5 mb-1' controlId='name'>
            <Form.Label className="text-light">Product Name</Form.Label>
            <Form.Control type='string' placeholder='Product name...' onChange={(e)=>SetName(e.target.value)}/>
            </Form.Group>

            <Form.Group className='mb-1' controlId='price'>
            <Form.Label className="text-light">Price</Form.Label>
            <Form.Control type='price' placeholder='£3.10...' onChange={(e)=>SetPrice(e.target.value)}/>
            </Form.Group>

            <Form.Group className='mb-1' controlId='image'>
            <Form.Label className="text-light">Image</Form.Label>
            <Form.Control type='file' placeholder='Path...'/>
            </Form.Group>

            <Button variant="success" className='w-100 mt-3' onClick={createProduct}>Add</Button>
            </Form>
          </FormContainer>
        
      </div>
    </div>

    
  )
}

export default AddProductScreen