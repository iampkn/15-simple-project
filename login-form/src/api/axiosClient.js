import axios from "axios"

export default axios.create({
   baseURL: "http://10.0.0.202:8080",
   timeout: 10000,
})
