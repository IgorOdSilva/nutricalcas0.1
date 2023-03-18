const resultadoPI = document.querySelector('#resultadoPI')
const height = document.querySelector('#height')
const weight = document.querySelector('#weight')

const calcPI = () => {
const pi = (21 * (height.value * height.value)) .toFixed(1)
resultadoPI.innerHTML = `Peso Ideal: ${pi}kg`

}