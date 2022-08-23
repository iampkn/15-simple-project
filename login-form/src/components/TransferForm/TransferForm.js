import React, { useCallback } from "react"
import { Formik, Form, Field, ErrorMessage } from "formik"
import { useSelector } from "react-redux"
import * as Yup from "yup"
import { selectPlan } from "../../store/Slice/useSlice"
import TextError from "../TextError"

const initialValues = {
   receiver: "",
   sender: "",
   title: "",
   message: "",
   files: "",
}

const TransferForm = () => {
   const userPlan = useSelector(selectPlan)

   function checkSizeFile(files) {
      let valid = true
      console.log(files)
      if (files) {
         const FileArray = Object.values(files)
         const totalSize = FileArray.reduce((total, file) => {
            return total + file.size
         }, 0)

         if ((totalSize / 1073741824).toFixed(2) > userPlan.size_limit) {
            valid = false
         }
      }
      console.log(valid)
      return valid
   }

   const validationSchema = Yup.object().shape({
      files: Yup.mixed()
         .required("Don't forget to attack your file")
         .test(
            "is-big-type",
            "Seem you meet the maximum, you need to nạp tiền to sent more",
            checkSizeFile
         ),
      receiver: Yup.string().email().required("Please input receive email"),
      sender: Yup.string().email().required("Please enter your email"),
      title: Yup.string(),
   })

   function handleSubmit(values, onSubmitProps) {
      if (window.confirm("Do you trust me") === true) {
         console.log(values)

         onSubmitProps.setSubmitting(false)
      }
   }
   window.onbeforeunload = function () {
      return "Data will be lost if you leave the page, are you sure?"
   }
   return (
      <Formik
         initialValues={initialValues}
         validationSchema={validationSchema}
         onSubmit={handleSubmit}
         validateOnMount>
         {(formik) => {
            return (
               <Form>
                  <div>
                     <label htmlFor='files'>Up load File</label>
                     <input
                        type='file'
                        id='files'
                        onChange={(e) => {
                           setFieldValue("files", e.target.files)
                        }}
                        multiple
                     />
                     <ErrorMessage name='files' component={TextError} />
                  </div>
                  <div>
                     <label htmlFor='receiver'>Email to</label>
                     <Field type='email' name='receiver' id='receiver' />
                     <ErrorMessage name='receiver' component={TextError} />
                  </div>
                  <div>
                     <label htmlFor='sender'>Your email</label>
                     <Field type='email' name='sender' id='sender' />
                     <ErrorMessage name='sender' component={TextError} />
                  </div>
                  <div>
                     <label htmlFor='title'>Title</label>
                     <Field type='text' name='title' id='title' />
                     <ErrorMessage name='title' component={TextError} />
                  </div>
                  <div>
                     <label htmlFor='message'>Message</label>
                     <Field type='text' name='message' id='message' />
                     <ErrorMessage name='message' component={TextError} />
                  </div>
                  <button
                     type='submit'
                     disabled={!formik.dirty || formik.isSubmitting}>
                     Transfers
                  </button>
               </Form>
            )
         }}
      </Formik>
   )
}

export default TransferForm
