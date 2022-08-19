import React from "react"
import { useSelector } from "react-redux"
import { selectUserData } from "../../store/Slice/useSlice"

const NavUser = () => {
   const data = useSelector(selectUserData)
   return (
      <div>
         <h3>{data.email}</h3>
         <img src={data.avatar} alt='user avatar'></img>
      </div>
   )
}

export default NavUser
