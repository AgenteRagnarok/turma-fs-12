type Usuario = {
  id: number;
  nome: string;
  email: string;
};

type TabelaProps = {
  usuarios: Array<Usuario>;
};

function Tabela(props: TabelaProps) {
  return (
    <table className="table table-striped table-hover">
      <thead>
        <tr>
          <th>ID</th>
          <th>Nome</th>
          <th>Email</th>
          <th>Ações</th>
        </tr>
      </thead>
      <tbody>
        {props.usuarios.map((usuario) => (
          <tr key={usuario.id}>
            <td>{usuario.id}</td>
            <td>{usuario.nome}</td>
            <td>{usuario.email}</td>
            <td>botoes</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Tabela;
