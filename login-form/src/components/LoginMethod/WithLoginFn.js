import React, { useState } from "react"
import api from "../../api/axiosCline"
import { useDispatch } from "react-redux"
import { login } from "../../store/Slice/useSlice"

const initialValues = {
   prop1: "",
   prop2: "",
}

const LOGIN_URL = "/auth/login"

const WithLoginFn = (WrappedComponent) => {
   const [errMsg, setErrMsg] = useState()
   const [typeLogin, setTypeLogin] = useState(0)
   const dispatch = useDispatch()

   async function Login(prop1, prop2) {
      try {
         console.log("Login")
         const response = await api.post(
            LOGIN_URL,
            JSON.stringify({ email: prop1, password: prop2 }),
            {
               headers: { "Content-Type": "application/json" },
            }
         )
         dispatch(login(response.data))
      } catch (error) {
         if (!error?.response) {
            setErrMsg("No sever response")
         } else if (error.response?.status === 400) {
            setErrMsg("Wrong Email or Password")
         } else if (error.response?.status === 401) {
            setErrMsg("Unauthorized")
         } else {
            setErrMsg("Login Failed")
         }
      }
   }

   function changeLoginType() {
      setTypeLogin(!typeLogin)
   }

   return (
      <div>
         <button onClick={changeLoginType}>Login with username</button>
         <WrappedComponent Login={Login} />
      </div>
   )
}

export default WithLoginFn
