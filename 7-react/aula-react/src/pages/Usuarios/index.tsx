import { useState } from "react";
import Cabecalho from "../../components/Cabecalho";
import Form from "../../components/Form";
import Tabela from "../../components/Tabela";

type Usuario = {
  id: number;
  nome: string;
  email: string;
};

function Usuarios() {
  const [usuarios, setUsuarios] = useState<Array<Usuario>>([]);

  const carregarUsuarios = async () => {
    const usuariosDaApi = await (await fetch("http://localhost:3000/usuarios")).json();
    setUsuarios(usuariosDaApi);
  };

  carregarUsuarios();

  const salvarUsuario = async (novoUsuario: Usuario) => {
    await fetch("http://localhost:3000/usuarios", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(novoUsuario),
    });
    salvarUsuario();
  };

  const excluirUsuario = async (id: number) => {
    await fetch(`http://localhost:3000/usuarios/${id}`, {
      method: "DELETE",
    });

    return ();
  };

  const alterarUsuario = async (id: number, nome: string, email: string) => {
    await fetch(`http://localhost:3000/usuarios/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ nome, email }),
    });
  };

  return (
    <div className="container">
      <Cabecalho titulo="Cadastro de usuários" />
      <Tabela usuarios={usuarios} />
      <Form usuarios={usuarios} setUsuarios={setUsuarios} />
    </div>
  );
}

export default Usuarios;
