// on type enter exec calcula()
document.addEventListener('keydown', function (event) {
  if (event.key === 'Enter') {
    calcula()
  }
})

function calcula() {
  let distanciaTotal = document.getElementById('distanciaTotal').value
  let combustivelGasto = document.getElementById('combustivelGasto').value

  if (!distanciaTotal) {
    alert('Preencha a distância total')
    return
  }

  if (combustivelGasto == '') {
    alert('Preencha o combustível gasto')
    return
  }

  distanciaTotal = parseFloat(distanciaTotal)
  combustivelGasto = parseFloat(combustivelGasto)

  let consumoMedio = distanciaTotal / combustivelGasto

  document.getElementById('resultado').innerHTML = `
    ${consumoMedio} km/l
  `
}