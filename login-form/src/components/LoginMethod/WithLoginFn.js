import React from "react"
import api from "../../api/axiosCline"

const initialValues = {
   prop1: "",
   prop2: "",
}
const LOGIN_URL = "/auth/login"

const WithLoginFn =
   (WrappedComponent, entity) =>
   ({ ...props }) => {
      const WRAPPED = WrappedComponent

      async function Login(prop1, prop2) {
         console.log("Login")
         return await api.post(
            LOGIN_URL,
            JSON.stringify({ [entity.toString()]: prop1, password: prop2 }),
            {
               headers: { "Content-Type": "application/json" },
            }
         )
      }

      return (
         <div>
            <WRAPPED Login={Login} {...props} initialValues={initialValues} />
         </div>
      )
   }

export default WithLoginFn
