import React from "react"
import { Formik, Form, Field, ErrorMessage } from "formik"
import * as Yup from "yup"
import TextError from "./TextError"
import { useDispatch } from "react-redux"
import { login } from "../store/Slice/useSlice"

const initialValues = {
   username: "",
   email: "",
   password: "",
}

const validationSchema = Yup.object({
   username: Yup.string()
      .required("Please enter your username")
      .min(6, "Too short"),
   email: Yup.string().email().required("Please enter your email"),
   password: Yup.string()
      .required("Please enter your password")
      .min(8, "Password is too short - should be 8 characters minimun")
      .matches(
         /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
         "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
      ),
})

function Login() {
   const dispatch = useDispatch()

   const onSubmit = (values) => {
      dispatch(
         login({
            values,
            loggedIn: true,
         })
      )
   }

   return (
      <Formik
         initialValues={initialValues}
         validationSchema={validationSchema}
         onSubmit={onSubmit}
      >
         <Form>
            <h1>Login form</h1>
            <div>
               <label htmlFor='username'>User Name</label>
               <Field type='text' name='username' id='username' />
               <ErrorMessage name='username' component={TextError} />
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

export default Login
