import React from "react"

const withLogin = (WrappedComponent) => {
   class WithLogin extends React.Component {
      constructor(props) {
         super(props)
         this.state = {}
      }
      render() {
         return <WrappedComponent name='Hahaha' />
      }
   }
   return WithLogin
}

export default withLogin
