// on type enter exec calcula()
let vendedores = [{
  nome: "Eduardo",
  salarioFixo: 1500,
  salarioTotal: 5600,
  totalVendas: 25000
}];

let indiceParaEditar = null

document.addEventListener('keydown', function (event) {
  if (event.key === 'Enter') {
    calcula()
  }
})

document.getElementById('btn-calcular').addEventListener('click', function () {
  calcula()
})

montaTabela()

function calcula() {
  let nome = document.getElementById('nome').value
  let salarioFixo = document.getElementById('salarioFixo').value
  let totalVendas = document.getElementById('totalVendas').value

  if (!nome) {
    alert('Preencha o nome do vendedor')
    return
  }

  if (salarioFixo == '') {
    alert('Preencha o salário fixo')
    return
  }
  
  if (totalVendas == '') {
    alert('Preencha o total em vendas')
    return
  }

  let porcentagemComissao = 0.15;
  salarioFixo = parseFloat(salarioFixo)
  totalVendas = parseFloat(totalVendas)

  let salarioTotal = salarioFixo + totalVendas * porcentagemComissao

  let vendedor = {
    nome: nome,
    salarioFixo: salarioFixo,
    salarioTotal: salarioTotal,
    totalVendas: totalVendas
  }

  if (indiceParaEditar === null) {
    vendedores.push(vendedor)
  } else {
    vendedores[indiceParaEditar] = vendedor

    indiceParaEditar = null
  }

  montaTabela()
  limpaCampos()
}

function excluiVendedor(index) {
  Swal.fire({
    title: "Tem certeza que deseja excluir? Não vai ter volta!!",
    showCancelButton: true,
    confirmButtonText: "Excluir",
    cancelButtonText: `Cancelar`
  }).then((result) => {
    if (result.isConfirmed) {
      vendedores.splice(index, 1)

      montaTabela()

      Swal.fire({
        title: 'Sucesso',
        icon: 'success',
      })
    }
  });
}

function editaVendedor(index) {
  let vendedor = vendedores[index]

  document.getElementById('nome').value = vendedor.nome
  document.getElementById('salarioFixo').value = vendedor.salarioFixo
  document.getElementById('totalVendas').value = vendedor.totalVendas

  indiceParaEditar = index
}

function moedaBrasil(valor) {
  return valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
}

function montaTabela() {
  document.getElementById("vendedores").innerHTML = ''

  for (let i = 0; i < vendedores.length; i++) {
    let vendedor = vendedores[i]
    document.getElementById("vendedores").innerHTML += `
      <tr>
        <td>${vendedor.nome}</td>
        <td>${moedaBrasil(vendedor.salarioFixo)}</td>
        <td>${moedaBrasil(vendedor.salarioTotal)}</td>
        <td>
          <button type="button" onclick="editaVendedor(${i})" class="btn btn-info">
            <i class="bi bi-pencil-square"></i> Editar
          </button>
          <button type="button" onclick="excluiVendedor(${i})" class="btn btn-danger">
            <i class="bi bi-trash"></i>
            Excluir
          </button>
        </td>
      </tr>
    `
  }
}

function limpaCampos() {
  document.getElementById('nome').value = ''
  document.getElementById('salarioFixo').value = ''
  document.getElementById('totalVendas').value = ''
}