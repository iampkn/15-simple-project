import { useSelector } from "react-redux"
import Login from "./components/Login"
import LoginWithEmail from "./components/LoginMethod/LoginType/LoginWithEmail"
import LoginWithUserName from "./components/LoginMethod/LoginType/LoginWithUserName"
import { Logout } from "./components/Logout"
import { selectUser } from "./store/Slice/useSlice"

function App() {
   const user = useSelector(selectUser)
   return (
      <div className='App'>
         {user ? <Logout /> : <LoginWithEmail />}
         <LoginWithUserName />
      </div>
   )
}

export default App
