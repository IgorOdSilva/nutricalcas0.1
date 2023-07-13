const resultado1 = document.querySelector('#resultado1')
const qtUltilizada = document.querySelector('#qtUltilizada')
const nPorcoes = document.querySelector('#nPorcoes')

const divPerCapita = () => {
const pc = (qtUltilizada.value / nPorcoes.value) .toFixed(2)
resultado1.innerHTML = `Per Capita: ${pc}g`

}