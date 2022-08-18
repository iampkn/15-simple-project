import React, { useState } from "react"
import WithLoginFn from "../WithLoginFn"
import { useDispatch } from "react-redux"
import { Formik, Form, Field, ErrorMessage } from "formik"
import * as Yup from "yup"
import TextError from "../../TextError"
import { login } from "../../../store/Slice/useSlice"

const validationLoginWithEmail = Yup.object({
   prop1: Yup.string()
      .email("Invalid email")
      .required("Please enter your email"),
   // prop2: Yup.string()
   //    .required("Please enter your password")
   //    .min(8, "Password is too short - should be 8 characters minimum")
   //    .matches(
   //       /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
   //       "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
   //    ),
})

const LoginWithEmail = (props) => {
   const { Login, initialValues } = props
   const [errMsg, setErrMsg] = useState()
   const dispatch = useDispatch()

   async function handleSubmit(values) {
      console.log(values)
      const { prop1, prop2 } = values
      try {
         const response = await Login(prop1, prop2)
         console.log(response.data)
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
