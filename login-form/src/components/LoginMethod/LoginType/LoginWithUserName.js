import React, { Component } from "react"
import withLogin from "../withLogin"

class LoginWithUserName extends Component {
   render() {
      const initialValues = this.props.initialValues
      return <div>LoginWithUserName</div>
   }
}

export default withLogin(LoginWithUserName)
