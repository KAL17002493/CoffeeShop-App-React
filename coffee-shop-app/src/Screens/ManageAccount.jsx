import React from 'react'

function ManageAccount() {

  return (
    <div className="bg-bannerSmall">
        <div className="backgroundColour-cover text-center">
            <h1 className='py-3 text-center'>Manage Account</h1>

            <h3>{window.localStorage.getItem("name")}</h3>

        </div>
    </div>

  )
}

export default ManageAccount

/*
order number
list of products

controller

.include
*/