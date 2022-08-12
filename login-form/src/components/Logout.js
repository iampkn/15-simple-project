import React from "react"
import { useDispatch } from "react-redux"
import { logout } from "../store/Slice/useSlice"

export const Logout = () => {
   const dispatch = useDispatch()
   function handleLogout() {
      dispatch(logout())
   }
   return (
      <div>
         <h1>You are login in</h1>
         <button onClick={handleLogout}>Logout</button>
      </div>
   )
}
