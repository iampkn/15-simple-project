import { Route, Routes } from "react-router-dom"
import ControlLogin from "./components/ControlLogin"
import HomePage from "./components/Pages/HomePage"
import Register from "./components/Register/Register"

function App() {
   return (
      <div className='App'>
         <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/login' element={<ControlLogin />} />
            <Route path='/register' element={<Register />} />
         </Routes>
      </div>
   )
}

export default App
