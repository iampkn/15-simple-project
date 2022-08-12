import React from "react"
import { useFormik } from "formik"
import * as Yup from "yup"

const initialValues = {
   name: "",
   email: "",
   channel: "",
}
const onSubmit = (values) => {
   console.log("Form data", values)
}

const validate = (values) => {
   const errors = {}

   if (!values.name) {
      errors.name = "This field is required"
   }
   if (!values.email) {
      errors.email = "This field is required"
   } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = "Invalid email address"
   }

   if (!values.channel) {
      errors.channel = "This field is required"
   }
   return errors
}

const validationSchema = Yup.object({
   name: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("This field is required"),
   email: Yup.string()
      .email("Invaild email format")
      .required("This field is required"),
   channel: Yup.string().required("This string is required"),
})

function OldYoutubeForm() {
   const formik = useFormik({
      initialValues,
      onSubmit,
      validationSchema,
   })

   return (
      <div>
         <form onSubmit={formik.handleSubmit}>
            <label htmlFor='name'>Name</label>
            <input
               type='text'
               name='name'
               id='name'
               onBlur={formik.handleBlur}
               onChange={formik.handleChange}
               value={formik.values.name}
            />
            {formik.touched.name && formik.errors.name ? (
               <div className='error'>{formik.errors.name}</div>
            ) : null}
            <label htmlFor='email'>E-mail</label>
            <input
               type='email'
               name='email'
               id='email'
               onBlur={formik.handleBlur}
               onChange={formik.handleChange}
               value={formik.values.email}
            />
            {formik.touched.email && formik.errors.email ? (
               <div className='error'>{formik.errors.email}</div>
            ) : null}
            <label htmlFor='channel'>Channel</label>
            <input
               type='text'
               name='channel'
               id='channel'
               onBlur={formik.handleBlur}
               onChange={formik.handleChange}
               value={formik.values.channel}
            />
            {formik.touched.channel && formik.errors.channel ? (
               <div className='error'>{formik.errors.channel}</div>
            ) : null}
            <button type='submit'>Submit</button>
         </form>
      </div>
   )
}

export default OldYoutubeForm
