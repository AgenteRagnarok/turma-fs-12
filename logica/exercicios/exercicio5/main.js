// on type enter exec calcula()
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

  document.getElementById("resultado").innerHTML = `
    O vendedor ${nome} tem o salário fixo de ${moedaBrasil(salarioFixo)}
    e vendeu no total ${moedaBrasil(totalVendas)}.
    Sendo assim o salário final do vendedor é: ${moedaBrasil(salarioTotal)}.
  `
}

function moedaBrasil(valor) {
  return valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
}