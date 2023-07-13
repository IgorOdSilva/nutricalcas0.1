const listaSelecaoCalc = document.querySelectorAll('.item')
const calculadora = document.querySelector('.cartao-calculadora')

listaSelecaoCalc.forEach(item => {
    console.log(item)

    item.addEventListener('click', () => {
       const cartaoCalculadoraAberto = document.querySelector('.aberto')
       cartaoCalculadoraAberto.classList.remove('aberto') 

       const idCalculadoraSelecionado = item.attributes.id.value

       const idDoCartaoDoCalculadoraParaAbrir = 'calc-' + idCalculadoraSelecionado
       const cartaoCalculadoraParaAbrir = document.getElementById('calc-' + idCalculadoraSelecionado)
       cartaoCalculadoraParaAbrir.classList.add('aberto')

       const itemAtivoNaListagem = document.querySelector('.ativo')
       itemAtivoNaListagem.classList.remove('ativo')

       const itemSelecionadoNaListagem = document.getElementById(idCalculadoraSelecionado)
       itemSelecionadoNaListagem.classList.add('ativo')


    })
})