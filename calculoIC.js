const resultadoIC = document.querySelector('#resultadoIC')
const pCozido = document.querySelector('#pCozido')
const pLiquido = document.querySelector('#pLiquido')

const calcIC = () => {
const ic = (pCozido.value / pLiquido.value) .toFixed(2)
resultadoIC.innerHTML = `Índice de Cocção: ${ic}`

}