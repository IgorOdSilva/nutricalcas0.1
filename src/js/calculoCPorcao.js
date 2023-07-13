const resultadoCPorcao = document.querySelector('#resultadoCPorcao')
const cTotal = document.querySelector('#cTotal')
const nPessoas = document.querySelector('#nPessoas')

const calcCPorcao = () => {
const cPorcao = (cTotal.value / nPessoas.value) .toFixed(2)
resultadoCPorcao.innerHTML = `Custo por Porção: ${cPorcao}R$ `

}
