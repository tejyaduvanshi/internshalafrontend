import axios from "axios";

const instance = axios.create({
    baseURL: "https://localhost:8080/",
    withCredentials:true
})
export default instance;