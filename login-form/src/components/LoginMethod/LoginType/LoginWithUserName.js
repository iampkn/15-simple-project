import React, { Component } from "react"
import withLogin from "../withLogin"
import { Formik, Form, Field, ErrorMessage } from "formik"
import TextError from "../../TextError"
import * as Yup from "yup"

class LoginWithUserName extends Component {
   render() {
      const validationLoginWithUserName = Yup.object({
         prop1: Yup.string().required("Please enter your username"),
         // password: Yup.string()
         //    .required("Please enter your password")
         //    .min(8, "Password is too short - should be 8 characters minimun")
         //    .matches(
         //       /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
         //       "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
         //    ),
      })
      function onSubmit(values) {
         console.log(values)
         const { prop1, prop2 } = values
         Login(prop1, prop2)
      }
      const { Login } = this.props
      return (
         <Formik
            initialValues={this.props.initialValues}
            validationSchema={validationLoginWithUserName}
            onSubmit={onSubmit}
         >
            <Form>
               <div>
                  <h1>Login form</h1>
                  <h1>{this.props.ErrMsg ? this.props.ErrMsg : null}</h1>
               </div>

               <div>
                  <label htmlFor='prop1'>User Name</label>
                  <Field type='text' name='prop1' id='prop1' />
                  <ErrorMessage name='prop1' component={TextError} />
               </div>
               <div>
                  <label htmlFor='password'>Password</label>
                  <Field type='password' name='prop2' id='password' />
                  <ErrorMessage name='password' component={TextError} />
               </div>
               <button type='submit'>Login</button>
            </Form>
         </Formik>
      )
   }
}

export default withLogin(LoginWithUserName)
