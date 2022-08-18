import React from "react"
import { Link } from "react-router-dom"
import { useSelector } from "react-redux"
import { selectAccToken } from "../store/Slice/useSlice"
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
   if (access_token) {
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
}

export default HomePage
