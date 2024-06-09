
function soma() {
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

  let resultado = parseInt(numeroA) + parseInt(numeroB)

  document.getElementById('resultado').innerHTML = resultado
}