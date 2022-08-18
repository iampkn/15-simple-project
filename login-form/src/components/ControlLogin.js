import React, { useState } from "react"
import LoginWithEmail from "./LoginMethod/LoginType/LoginWithEmail"
import LoginWithUserName from "./LoginMethod/LoginType/LoginWithUserName"

const ControlLogin = () => {
   const [typeLogin, setTypeLogin] = useState("email")
   return (
      <div>
         <button
            onClick={(e) => {
               e.preventDefault()
               setTypeLogin("email")
            }}>
            Login with email
         </button>
         <button
            onClick={(e) => {
               e.preventDefault()
               setTypeLogin("username")
            }}>
            Login with Username
         </button>
         {typeLogin === "email" ? <LoginWithEmail /> : null}
         {typeLogin === "username" ? <LoginWithUserName /> : null}
      </div>
   )
}

export default ControlLogin
