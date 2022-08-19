import { Route, Routes } from "react-router-dom"
import ControlLogin from "./components/ControlLogin"
import LoginWithEmail from "./components/LoginMethod/LoginType/LoginWithEmail"
import LoginWithUserName from "./components/LoginMethod/LoginType/LoginWithUserName"
import HomePage from "./components/Pages/HomePage/HomePage"
import Missing from "./components/Pages/Missing/Missing"
import Contacts from "./components/Pages/Contacts/Contacts"
import Portals from "./components/Pages/Portals/Portals"
import Upgrade from "./components/Pages/Upgrade/Upgrade"
import Transfers from "./components/Pages/Transfers/Transfers"
import Help from "./components/Pages/Help/Help"
import Company from "./components/Pages/Company/Company"
import Pricing from "./components/Pages/Pricing/Pricing"
import Branding from "./components/Pages/Branding/Branding"
import Register from "./components/Register/Register"
import RegisterSuccess from "./components/Register/RegisterSuccess/RegisterSuccess"
import PrivateRouters from "./utils/PrivateRouters"
import { Logout } from "./components/Logout"

function App() {
   return (
      <div className='App'>
         <Routes>
            {/* Router need to protect */}
            <Route element={<PrivateRouters />}>
               <Route path='/logout' element={<Logout />} />
               <Route path='/contacts' element={<Contacts />} />
               <Route path='/upgrade' element={<Upgrade />} />
               <Route path='/portals' element={<Portals />} />
               <Route path='/transfers' element={<Transfers />} />
               <Route path='/branding' element={<Branding />} />
               <Route path='/registerSuccess' element={<RegisterSuccess />} />
            </Route>
            {/* Public router */}
            <Route path='/' exact element={<HomePage />} />
            <Route path='/login' element={<ControlLogin />} />
            <Route path='/login/email' element={<LoginWithEmail />} />
            <Route path='/login/username' element={<LoginWithUserName />} />
            <Route path='/register' element={<Register />} />
            <Route path='/help' element={<Help />} />
            <Route path='/company' element={<Company />} />
            <Route path='/pricing' element={<Pricing />} />
            {/* Catch error missing page */}
            <Route path='*' element={<Missing />} />
         </Routes>
      </div>
   )
}

export default App
