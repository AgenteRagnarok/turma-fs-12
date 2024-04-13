// on type enter exec calcula()
document.addEventListener('keydown', function (event) {
  if (event.key === 'Enter') {
    calcula()
  }
})

function calcula() {
  let numeroA = document.getElementById('numeroA').value
  let numeroB = document.getElementById('numeroB').value

  if (!numeroA) {
    alert('Preencha o primeiro número')
    return
  }

  if (numeroB == '') {
    alert('Preencha o segundo número')
    return
  }

  numeroA = parseInt(numeroA)
  numeroB = parseInt(numeroB)

  let resultado_soma = numeroA + numeroB
  let resultado_subtracao = numeroA - numeroB
  let resultado_multiplicacao = numeroA * numeroB
  let resultado_divisao = numeroA / numeroB

  document.getElementById('resultado').innerHTML = `
    <p>A soma é: ${resultado_soma}</p>
    <p>A subtração é: ${resultado_subtracao}</p>
    <p>A multiplicação é: ${resultado_multiplicacao}</p>
    <p>A divisão é: ${resultado_divisao}</p>
  `
}