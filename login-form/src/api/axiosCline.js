import axios from "axios"

export default axios.create({
   baseURL: "https://codersx-swagger.glitch.me/api",
   timeout: 10000,
})
