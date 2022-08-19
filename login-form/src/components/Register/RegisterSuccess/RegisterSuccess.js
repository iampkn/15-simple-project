import React from "react"

const RegisterSuccess = () => {
   setInterval(() => {
      window.location.href = "/"
   }, 5000)
   return (
      <div>
         <h3>
            Congratulations, your registration has been successfully completed.
            You have just been sent an email containing membership activation
            instructions.
         </h3>
         <a href='https://mail.google.com/mail/u/0/#inbox'>Please your email</a>
      </div>
   )
}

export default RegisterSuccess
