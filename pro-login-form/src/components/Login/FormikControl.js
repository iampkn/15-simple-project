import React from "react"
import Input from "./Input"

function FormikControl(props) {
   const { control, ...rest } = props
   switch (control) {
      case "input":
         return <Input {...rest} />
      case "textarea":return <Input {...rest} />
      case "select":return <Input {...rest} />
      case "radio":return <Input {...rest} />
      case "checkbox":return <Input {...rest} />
      case "date":return <Input {...rest} />
      default:
         return null
   }
}

export default FormikControl
