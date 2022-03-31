import React from 'react'

function ManageAccount() {

  return (
    <div className="bg-bannerSmall">
        <div className="backgroundColour-cover text-center">
            <h1 className='py-3 text-center mt-5'>Manage Account</h1>

            <h3 className="mt-5">Username: {window.localStorage.getItem("name")}</h3>
            <h3 className="mt-5">Email: {window.localStorage.getItem("email")}</h3>

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