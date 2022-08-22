import React from "react"
import { Link, useLocation } from "react-router-dom"

const ControlLogin = () => {
   const location = useLocation()
   return (
      <div>
         <Link to='/login/email' state={location.state}>
            Login with email
         </Link>
         <br></br>
         <Link to='/login/username'>Login with username</Link>
      </div>
   )
}

export default ControlLogin
