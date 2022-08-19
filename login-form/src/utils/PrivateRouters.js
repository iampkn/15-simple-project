import React from "react"
import { Outlet, Navigate, useLocation } from "react-router-dom"
import { useSelector } from "react-redux"
import { selectAccToken } from "../store/Slice/useSlice"

const PrivateRouters = () => {
   const access_token = useSelector(selectAccToken)
   const location = useLocation()
   if (access_token === null) {
      return <Navigate to='/login' state={{ from: location }} replace />
   } else {
      return <Outlet />
   }
}

export default PrivateRouters
