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
            setErrMsg: "",
         }
      }

      Login = async (prop1, prop2) => {
         try {
            const response = await api.post(
               this.state.LOGIN_URL,
               JSON.stringify({ prop1, prop2 }),
               {
                  headers: { "Content-Type": "application/json" },
               }
            )
            console.log(response.data)
         } catch (error) {
            if (!error?.response) {
               this.state.setErrMsg("No sever response")
            } else if (error.response?.status === 400) {
               this.state.setErrMsg("Wrong Email or Password")
            } else if (error.response?.status === 401) {
               this.state.setErrMsg("Unauthorized")
            } else {
               this.state.setErrMsg("Login Failed")
            }
         }
      }
      setPathLogin = (path) => {
         this.setState((prevState) => {
            return { LOGIN_URL: prevState + path }
         })
      }

      render() {
         const { initialValues, LOGIN_URL } = this.state
         return (
            <WrappedComponent
               initialValues={initialValues}
               LOGIN_URL={LOGIN_URL}
            />
         )
      }
   }
   return WithLogin
}

export default withLogin
