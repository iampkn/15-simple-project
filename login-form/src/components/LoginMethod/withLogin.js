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
            data:[],
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
      setData = (data)=>{
         this.setState(() => {
            return { data: data }
         })
      }

      render() {
         const { initialValues, errMsg, LOGIN_URL, data } = this.state
         const handleSetErr = this.setErrMsg.bind(this)
         const handleSetData = this.setData.bind(this)
         function onSubmit(values){
            console.log(values)
               const { prop1, prop2 } = values
               Login(prop1, prop2)
           }
         
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
               handleSetData(response.data)
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
                 onSubmit={onSubmit}
                 UserData={data}
               />
            </div>
         )
      }
   }
   return WithLogin
}

export default withLogin
