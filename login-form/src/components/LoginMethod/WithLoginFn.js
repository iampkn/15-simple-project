import React from "react"
import api from "../../api/axiosCline"


const initialValues = {
   prop1: "",
   prop2: "",
}
const LOGIN_URL = "/auth/login"

const WithLoginFn = (WrappedComponent, entity) =>({...props}) =>{
   const WRAPPED = WrappedComponent

   var ErrMsg =null
  function setErrMsg(err){
   ErrMsg = err
  }
  function onSubmit(values){
   console.log(values)
      const { prop1, prop2 } = values
      Login(prop1, prop2)
  }
  
   async function Login(prop1, prop2) {
      try {
         console.log("Login")
         const response = await api.post(
            LOGIN_URL,
            JSON.stringify({ [entity.toString()]: prop1, password: prop2 }),
            {
               headers: { "Content-Type": "application/json" },
            }
         )
         console.log(response.data)
      
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
console.log(ErrMsg)
  

   return (
      <div>
         <button >Login with username</button>
         <h1>{ErrMsg ? ErrMsg : null}</h1>
         <WRAPPED Login={Login} {...props} initialValues={initialValues} onSubmit={onSubmit}  />
      </div>
   )
}

export default WithLoginFn
