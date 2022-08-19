import React, { useState } from "react"
import { Formik, Form, Field, ErrorMessage } from "formik"
import { useDispatch } from "react-redux"
import * as Yup from "yup"
import TextError from "../TextError"
import api from "../../api/axiosClient"
import { login } from "../../store/Slice/useSlice"

const initialValues = {
   username: "",
   email: "",
   password: "",
   passwordConfirm: "",
}

const validationSchema = Yup.object({
   username: Yup.string().min(6, "Too short"),
   email: Yup.string().email().required("Please enter your email"),
   password: Yup.string()
      .required("Please enter your password")
      .min(8, "Password is too short - should be 8 characters minimum")
      .matches(
         /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
         "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
      ),
   passwordConfirm: Yup.string()
      .label("Password Confirm")
      .required()
      .oneOf([Yup.ref("password")], "Passwords does not match"),
})

function Register() {
   const [msg, setMsg] = useState()
   const dispatch = useDispatch()

   const onSubmit = (values) => {
      console.log("Wait for post")
      handlePost(values)
   }

   async function handlePost(values) {
      const { username, email, password } = values
      try {
         const response = await api.post(
            "/user/register",
            JSON.stringify({ username, email, password }),
            {
               headers: { "Content-Type": "application/json" },
            }
         )
         dispatch(login(response.data))
         console.log("Post data", response)
         window.location.href = "/registerSuccess"
      } catch (error) {
         if (!error?.response) {
            setMsg("No sever response")
         } else {
            setMsg(error.response?.data.message)
         }
      }
   }

   return (
      <Formik
         initialValues={initialValues}
         validationSchema={validationSchema}
         onSubmit={onSubmit}>
         <Form>
            <h1>Register form</h1>
            {msg ? msg : null}
            <div>
               <label htmlFor='email'>Email</label>
               <Field type='email' name='email' id='email' />
               <ErrorMessage name='email' component={TextError} />
            </div>
            <div>
               <label htmlFor='username'>User Name</label>
               <Field type='text' name='username' id='username' />
               <ErrorMessage name='username' component={TextError} />
            </div>
            <div>
               <label htmlFor='password'>Password</label>
               <Field type='password' name='password' id='password' />
               <ErrorMessage name='password' component={TextError} />
            </div>

            <div>
               <label htmlFor='passwordConfirm'>Password Confirm</label>
               <Field
                  type='password'
                  name='passwordConfirm'
                  id='passwordConfirm'
               />
               <ErrorMessage name='passwordConfirm' component={TextError} />
            </div>

            <button type='submit'>Create AIOZ W3S account</button>
         </Form>
      </Formik>
   )
}

export default Register
