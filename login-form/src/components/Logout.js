import React, { useState } from "react"
import { useDispatch } from "react-redux"
import { logout } from "../store/Slice/useSlice"

export const Logout = () => {
   const [image, setImage] = useState()
   const [loading, setLoading] = useState(false)
   const dispatch = useDispatch()
   function handleLogout() {
      dispatch(logout())
   }

   async function uploadImage(e) {
      const file = e.target.file
   }

   return (
      <div>
         <h1>You are login in</h1>
         <h2>Update your avatar</h2>
         <input type='file' name='file' placeholder='Up your picture here' />
         <button onClick={handleLogout}>Logout</button>
      </div>
   )
}
