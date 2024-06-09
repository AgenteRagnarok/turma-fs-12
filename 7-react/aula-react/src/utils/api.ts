import axios from "axios";
import Usuarios from "../pages/Usuarios";

const api = axios.create({
    baseURL: "https://localhost:3000/usuarios"
});
    
export default api;