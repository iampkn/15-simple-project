import React from "react"
import { Link } from "react-router-dom"
import { useSelector } from "react-redux"
import { selectAccToken } from "../../../store/Slice/useSlice"
import NavUser from "../../NavUser/NavUser"
const HomePage = () => {
   const access_token = useSelector(selectAccToken)
   const Unlogin = [
      {
         name: "Pricing",
         path: "/pricing",
      },
      {
         name: "Company",
         path: "/company",
      },
      {
         name: "Help",
         path: "/help",
      },
      {
         name: "Sign up",
         path: "/register",
      },
      {
         name: "Log in",
         path: "/login",
      },
   ]
   const LoginIn = [
      {
         name: "Portals",
         path: "/portals",
      },
      {
         name: "Transfers",
         path: "/transfers",
      },
      {
         name: "Contacts",
         path: "/contacts",
      },
      {
         name: "Branding",
         path: "/branding",
      },
      {
         name: "Upgrade",
         path: "/upgrade",
      },
      {
         name: "Log out",
         path: "/logout",
      },
   ]
   if (access_token === null) {
      return (
         <div>
            <nav>
               <ul>
                  {Unlogin.map((item, index) => (
                     <li key={index}>
                        <Link to={item.path}>{item.name}</Link>
                     </li>
                  ))}
               </ul>
            </nav>
         </div>
      )
   }
   return (
      <div>
         <nav>
            <ul>
               {LoginIn.map((item, index) => (
                  <li key={index}>
                     <Link to={item.path}>{item.name}</Link>
                  </li>
               ))}
               <li>
                  <NavUser />
               </li>
            </ul>
         </nav>
      </div>
   )
}

export default HomePage
