type CabecalhoProps = {
  titulo: string;
};

function Cabecalho(props: CabecalhoProps) {
  return (
    <div className="row text-center">
      <h1>{props.titulo}</h1>
    </div>
  );
}

export default Cabecalho;
