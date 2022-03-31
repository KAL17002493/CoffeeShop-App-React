import React, { useEffect, useState } from 'react'
import {Button} from 'react-bootstrap'

function OrderScreen() {

    const [count, setCount] = useState(0);

    useEffect(() => {
    var products = JSON.parse(window.localStorage.getItem("products"))
    if(!products)
    {
      products = []
    }
    setCount(products.length)
},[])

  return (
    <div className="bg-bannerSmall">
        <div className="backgroundColour-1 text-center">

        <div className="text-center ">
            <Button  variant="success" className="w-100">Order <b>{count}</b></Button>
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
