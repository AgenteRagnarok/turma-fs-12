import { useState } from "react";
import usuariosService from "../../services/usuarios";

type Usuario = {
  id: number;
  nome: string;
  email: string;
};

type FormProps = {
  usuarios: Array<Usuario>;
  setUsuarios: (usuarios: Array<Usuario>) => void;
};

function Form(props: FormProps) {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");

  const salvarUsuario = async function () {
    const novoUsuario: Usuario = {
      nome,
      email,
    };

    const usuarioCriado = await usuariosService.criarUsuario(novoUsuario);

    props.setUsuarios([...props.usuarios, usuarioCriado]);

    setNome("");
    setEmail("");
  };

  return (
    <>
      <div className="row">
        <div className="col">
          <label className="form-label">Nome</label>
          <input
            value={nome}
            onChange={(evento) => setNome(evento.target.value)}
            placeholder="Nome Teste"
            type="text"
            className="form-control"
          />
        </div>
        <div className="col">
          <label className="form-label">Email</label>
          <input
            placeholder="email@teste.com"
            value={email}
            onChange={(evento) => setEmail(evento.target.value)}
            type="email"
            className="form-control"
          />
        </div>
        <div className="col d-flex align-items-end">
          <button onClick={salvarUsuario} className="btn btn-primary">
            Salvar
          </button>
        </div>
      </div>
    </>
  );
}

export default Form;
