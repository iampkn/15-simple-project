import React from "react"
import { Formik, Form, Field, ErrorMessage } from "formik"
import * as Yup from "yup"
import TextError from "./TextError"

const initialValues = {
   user: {
      name: "",
      email: "",
      address: "",
   },

   channel: "",
   comments: "",

   social: {
      facebook: "",
      telegram: "",
   },
}
const onSubmit = (values) => {
   console.log("Form data", values)
}

const validationSchema = Yup.object({
   social: Yup.object({
      facebook: Yup.string().required("This string is required"),
      telegram: Yup.string().required("This string is required"),
   }),
   user: Yup.object({
      name: Yup.string()
         .min(2, "Too Short!")
         .max(50, "Too Long!")
         .required("This field is required"),
      email: Yup.string()
         .email("Invaild email format")
         .required("This field is required"),
      address: Yup.string().required("This string is required"),
   }),
   channel: Yup.string().required("This string is required"),
})

function YoutubeForm() {
   return (
      <Formik
         initialValues={initialValues}
         validationSchema={validationSchema}
         onSubmit={onSubmit}
      >
         <Form>
            <div className='form-control'>
               <label htmlFor='name'>Name</label>
               <Field type='text' name='user.name' id='name' />
               <ErrorMessage name='user.name' component={TextError} />
            </div>

            <div className='form-control'>
               <label htmlFor='email'>E-mail</label>
               <Field type='email' name='user.email' id='email' />
               <ErrorMessage name='user.email' component={TextError} />
            </div>

            <div className='form-control'>
               <label htmlFor='channel'>Channel</label>
               <Field type='text' name='channel' id='channel' />
               <ErrorMessage name='channel' component={TextError} />
            </div>

            <div className='form-control'>
               <label htmlFor='comments'>Comments</label>
               <Field as='textarea' id='comments' name='comments'></Field>
            </div>

            <div className='form-control'>
               <label htmlFor='address'>Address</label>
               <Field name='user.address'>
                  {(props) => {
                     const { field, meta } = props
                     return (
                        <div>
                           <input type='text' id='address' {...field} />
                           {meta.touched && meta.error ? (
                              <div className='error'>{meta.error}</div>
                           ) : null}
                        </div>
                     )
                  }}
               </Field>
            </div>

            <div className='form-control'>
               <label htmlFor='facebook'>FaceBook username</label>
               <Field type='text' id='facebook' name='social.facebook' />
               <ErrorMessage name='social.facebook' component={TextError} />
            </div>

            <div className='form-control'>
               <label htmlFor='telegram'>Telegram username</label>
               <Field type='text' id='telegram' name='social.telegram' />
               <ErrorMessage name='social.telegram' component={TextError} />
            </div>

            <button type='submit'>Submit</button>
         </Form>
      </Formik>
   )
}

export default YoutubeForm
