import React from "react"
import WithLoginFn from "../WithLoginFn"
import { Formik, Form, Field, ErrorMessage } from "formik"
import * as Yup from "yup"
import TextError from "../../TextError"

const validationLoginWithEmail = Yup.object({
   prop1: Yup.string()
      .email("Invalid email")
      .required("Please enter your email"),
   // password: Yup.string()
   //    .required("Please enter your password")
   //    .min(8, "Password is too short - should be 8 characters minimum")
   //    .matches(
   //       /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
   //       "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
   //    ),
})

const LoginWithEmail = (props) => {
   return (
      <Formik
         initialValues={props.initialValues}
         validationSchema={validationLoginWithEmail}
         onSubmit={props.onSubmit}
      >
         <Form>
            <div>
               <h1>Login form</h1>
               <h1>{props.ErrMsg ? props.ErrMsg : null}</h1>
            </div>

            <div>
               <label htmlFor='prop1'>Email</label>
               <Field type='text' name='prop1' id='prop1' />
               <ErrorMessage name='prop1' component={TextError} />
            </div>
            <div>
               <label htmlFor='password'>Password</label>
               <Field type='password' name='prop2' id='password' />
               <ErrorMessage name='password' component={TextError} />
            </div>
            <button type='submit'>Submit</button>
         </Form>
      </Formik>
   )
}

export default WithLoginFn(LoginWithEmail, "email")
