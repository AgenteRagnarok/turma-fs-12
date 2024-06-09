document.getElementById('btnBuscar').addEventListener('click', function() {
    let cep = document.getElementById('cep').value

    if (cep.length != 8) {
        alert("CEP Inválido")
        return
    }

    fetch(`https://viacep.com.br/ws/${cep}/json/`)
        .then(resposta => resposta.json())
        .then(dados => {
            if (dados.logradouro == undefined) {
                alert("CEP Não encontrado")
                return
            }

            exibeEndereco(dados)

        })
})

function exibeEndereco(endereco) {
    document.getElementById("endereco-completo").innerHTML = `
        <ul>
            <li>Rua: ${endereco.logradouro}</li>
            <li>Bairro: ${endereco.bairro}</li>
            <li>Localidade: ${endereco.localidade}</li>
            <li>UF: ${endereco.uf}</li>
        </ul>
    `
}