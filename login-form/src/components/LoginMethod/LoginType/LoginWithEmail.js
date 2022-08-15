import React, { useState } from "react"
import withLogin from "../withLogin"
import { Formik, Form, Field, ErrorMessage } from "formik"
import * as Yup from "yup"
import TextError from "../../TextError"
import { useDispatch } from "react-redux"
import { login } from "../../../store/Slice/useSlice"
import api from "../../../api/axiosCline"

const initialValues = {
   email: "",
   password: "",
}

const LOGIN_URL = "/auth/login"

const validationLoginWithEmail = Yup.object({
   email: Yup.string().email().required("Please enter your email"),
   // password: Yup.string()
   //    .required("Please enter your password")
   //    .min(8, "Password is too short - should be 8 characters minimun")
   //    .matches(
   //       /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
   //       "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
   //    ),
})

const LoginWithEmail = () => {
   const [errMsg, setErrMsg] = useState()
   const dispatch = useDispatch()

   const onSubmit = (values) => {
      console.log("Login")
      Login(values)
   }

   async function Login(values) {
      const { email, password } = values
      try {
         const response = await api.post(
            LOGIN_URL,
            JSON.stringify({ email, password }),
            {
               headers: { "Content-Type": "application/json" },
            }
         )
         const data = response.data
         console.log(data)
         dispatch(login(data))
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
         onSubmit={onSubmit}
      >
         <Form>
            <div>
               <h1>Login form</h1>
               <h1>{errMsg ? errMsg : null}</h1>
            </div>
            <div>
               <label htmlFor='email'>Email</label>
               <Field type='email' name='email' id='email' />
               <ErrorMessage name='email' component={TextError} />
            </div>
            <div>
               <label htmlFor='password'>Password</label>
               <Field type='password' name='password' id='password' />
               <ErrorMessage name='password' component={TextError} />
            </div>
            <button type='submit'>Login</button>
         </Form>
      </Formik>
   )
}

export default withLogin(LoginWithEmail)
