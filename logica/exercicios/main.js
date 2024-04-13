// on type enter exec calcula()
let vendedores = [];

document.addEventListener('keydown', function (event) {
  if (event.key === 'Enter') {
    calcula()
  }
})

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
    salarioTotal: salarioTotal
  }

  vendedores.push(vendedor)

  montaTabela()
  limpaCampos()
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
      </tr>
    `
  }
}

function limpaCampos() {
  document.getElementById('nome').value = ''
  document.getElementById('salarioFixo').value = ''
  document.getElementById('totalVendas').value = ''
}