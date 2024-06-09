import api from "../utils/api"

const Usuarios = async () => {
    const response = await api.get("usuarios");
    return response.data;
};

export default usuariosService;