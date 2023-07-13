function calcPI() {

    const resultadoPI = document.querySelector('#resultadoPI')
    const height = document.querySelector('#height')
    const weight = document.querySelector('#weight')
    var fsex = document.getElementsByName('radsex')
    var genero = ''
    if (fsex[0].checked) {
            genero = 'Homem'
            var pi = (52 + (0.75 * ((height.value * 100) - 152.4))).toFixed(1)
            resultadoPI.innerHTML = `Seu peso ideal é: ${pi}kg`
    } else if (fsex[1].checked) {
        genero = 'Mulher'
        var pi = (52 + (0.67 * ((height.value * 100) - 152.4))).toFixed(1)
        resultadoPI.innerHTML = `Seu peso ideal é: ${pi}kg`
    }
}
