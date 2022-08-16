import React from 'react'
import { withFormik } from 'formik'
import MyForm from './MyForm';

const EhancedForm = withFormik({
    mapPropsToValues: () => ({ name: 'text' }),
 
   
   // Custom sync validation
   validate: values => {
     const errors:{[key: string]: any} = {};
 
     if (!values.name) {
       errors.name = 'Required';
     }
 
     return errors;
   },
 
   handleSubmit: (values, { setSubmitting }) => {
     setTimeout(() => {
       alert(JSON.stringify(values, null, 2));
       setSubmitting(false);
     }, 1000);
   },
 
   displayName: 'BasicForm',
})(MyForm);  
