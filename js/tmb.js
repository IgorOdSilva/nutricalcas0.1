function calcTMB() {
    const resultadoTMB = document.querySelector('#resultadoTMB')
    const weight1 = document.querySelector('#weight1')
    const idade = document.querySelector('#idade')
    var sex = document.getElementsByName('sex')
    var gender = ''
    if (idade >= 0 && idade <=3 && sex[0].checked) {
        gender = 'Mem'
        var tmb = ((59.512 * weight1.value) - 30.4).toFixed(1)
        resultadoTMB.innerHTML = `${tmb} kcal`
}
