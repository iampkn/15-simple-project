import { useSelector } from "react-redux"
//import Login from "./components/Login"
import LoginWithEmail from "./components/LoginMethod/LoginType/LoginWithEmail"
import LoginWithUserName from "./components/LoginMethod/LoginType/LoginWithUserName"
//import { Logout } from "./components/Logout"
import { selectAccToken } from "./store/Slice/useSlice"

function App() {
   const user = useSelector(selectAccToken)
   return (
      <div className='App'>
         {/* {user ? <Logout /> : <LoginWithEmail />} */}
         <LoginWithEmail />
      </div>
   )
}

export default App
