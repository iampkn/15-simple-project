import { Route, Routes } from "react-router-dom"
import ControlLogin from "./components/ControlLogin"
import LoginWithEmail from "./components/LoginMethod/LoginType/LoginWithEmail"
import LoginWithUserName from "./components/LoginMethod/LoginType/LoginWithUserName"
import HomePage from "./components/Pages/HomePage/HomePage"
import Register from "./components/Register/Register"

function App() {
   return (
      <div className='App'>
         <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/login' element={<ControlLogin />} />
            <Route path='/login/email' element={<LoginWithEmail />} />
            <Route path='/login/username' element={<LoginWithUserName />} />
            <Route path='/register' element={<Register />} />
         </Routes>
      </div>
   )
}

export default App
