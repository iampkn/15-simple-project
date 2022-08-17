import React from "react"
import api from "../../api/axiosCline"

const withLogin = (WrappedComponent) => {
   class WithLogin extends React.Component {
      constructor(props) {
         super(props)
         this.state = {
            initialValues: {
               prop1: "",
               prop2: "",
            },
            LOGIN_URL: "/auth/login",
            errMsg: "",
            typeLogin: "",
         }
      }

      setTypeLogin = (type) => {
         this.setState(() => {
            return { typeLogin: type }
         })
      }

      setErrMsg = (err) => {
         this.setState(() => {
            return { errMsg: err }
         })
      }

      render() {
         const { initialValues, errMsg, LOGIN_URL } = this.state
         const handleSetErr = this.setErrMsg.bind(this)
         
         async function Login(prop1, prop2) {
            try {
               console.log("Login")
               const response = await api.post(
                  LOGIN_URL,
                  JSON.stringify({ email: prop1, password: prop2 }),
                  {
                     headers: { "Content-Type": "application/json" },
                  }
               )
               console.log(response)
            } catch (error) {
               if (!error?.response) {
                  handleSetErr("No sever response")
               } else if (error.response?.status === 400) {
                  handleSetErr("Wrong Email or Password")
               } else if (error.response?.status === 401) {
                  handleSetErr("Unauthorized")
               } else {
                  handleSetErr("Login Failed")
               }
            }
         }
         return (
            <div>
               <WrappedComponent
                  initialValues={initialValues}
                  ErrMsg={errMsg}
                  Login={Login}
               />
            </div>
         )
      }
   }
   return WithLogin
}

export default withLogin
