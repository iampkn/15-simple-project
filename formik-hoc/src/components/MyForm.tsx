import React from 'react'


const MyForm = (props: any) => {
    const {
        values,
        touched,
        errors,
        handleChange,
        handleBlur,
        handleSubmit,
      } = props;
  return (
    <form onSubmit={handleSubmit}>
       <input
         type="text"
         onChange={handleChange}
         onBlur={handleBlur}
         value={values.name}
         name="name"
       />
       {errors.name && touched.name && <div id="feedback">{errors.name}</div>}
       <button type="submit">Submit</button>
     </form>
  )
}

export default MyForm