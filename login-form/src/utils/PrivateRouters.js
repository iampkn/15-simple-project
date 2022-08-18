import React from "react"
import { Outlet, Navigate } from "react-router-dom"
import { useSelector } from "react-redux"
import { selectAccToken } from "../store/Slice/useSlice"
i
const PrivateRouters = () => {
   const access_token = useSelector(selectAccToken)
   return access_token ? <Outlet /> : <Navigate to='/login' />
}

export default PrivateRouters
