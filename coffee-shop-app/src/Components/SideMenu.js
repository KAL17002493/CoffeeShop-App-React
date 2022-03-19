import React, {useState} from 'react'
import './SideMenu.css'
import {Link} from 'react-router-dom';

function SideMenu() {

    const [sideMenuActive, setSideMenuActive] = useState(false)

  return (
    <div>

        <div>
            <button className="btn btn-default" onClick={() => setSideMenuActive(!sideMenuActive)}>
                {sideMenuActive ? <> </> : <i class="bi bi-list fa-2x"></i>}
            </button>
        </div>

        <div className={`sideMenuDefault ${sideMenuActive ? "sideMenuActive" : ""}`}>
            <div className="m-2">
                <div className="accountStatsIcon me-2 text-end">
                    <i class="bi bi-person-circle fa-2x"></i>
                </div>
            </div>
            <div className="mt-5 text-center">

            </div>
        </div>
        
    </div>
  )
}

export default SideMenu