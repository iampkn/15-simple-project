import React, { useState } from "react"
import WithLoginFn from "../WithLoginFn"
import { useLocation, useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import { Formik, Form, Field, ErrorMessage } from "formik"
import * as Yup from "yup"
import TextError from "../../TextError"
import { login } from "../../../store/Slice/useSlice"

const validationLoginWithEmail = Yup.object({
   prop1: Yup.string()
      .email("Invalid email")
      .required("Please enter your email"),
})

const LoginWithEmail = (props) => {
   const { Login, initialValues } = props
   const [errMsg, setErrMsg] = useState()
   const dispatch = useDispatch()
   const navigate = useNavigate()
   const location = useLocation()
   const from = location.state?.from?.pathname || "/"
   console.log(from)

   async function handleSubmit(values) {
      console.log(values)
      const { prop1, prop2 } = values
      try {
         const response = await Login(prop1, prop2)
         console.log(response.data)
         dispatch(login(response.data))
         navigate(from, { replace: true })
      } catch (error) {
         if (!error?.response) {
            setErrMsg(error.response?.data.message)
         } else if (error.response?.status === 400) {
            setErrMsg(error.response?.data.message)
         } else if (error.response?.status === 401) {
            setErrMsg(error.response?.data.message)
         } else {
            setErrMsg(error.response?.data.message)
         }
      }
   }

   return (
      <Formik
         initialValues={initialValues}
         validationSchema={validationLoginWithEmail}
         onSubmit={handleSubmit}>
         <Form>
            <div>
               <h1>Login form</h1>
               <h1>{errMsg ? errMsg : null}</h1>
            </div>

            <div>
               <label htmlFor='email'>Email</label>
               <Field type='text' name='prop1' id='email' />
               <ErrorMessage name='prop1' component={TextError} />
            </div>
            <div>
               <label htmlFor='password'>Password</label>
               <Field type='password' name='prop2' id='password' />
               <ErrorMessage name='prop2' component={TextError} />
            </div>
            <button type='submit'>Submit</button>
         </Form>
      </Formik>
   )
}

export default WithLoginFn(LoginWithEmail, "email")
