function calcTMB() {
    const resultadoTM = document.querySelector('#resultadoTM')
    const pis = document.querySelector('#pis')
    const idade = document.querySelector('#idade')
    var sex = document.getElementsByName('sex')
    var gender = ''
    if (idade >= 0 && idade <=3 && sex[0].checked) {
        gender = 'Mem'
        var tmb = ((59.512 * pis.value) - 30.4).toFixed(1)
        resultadoTMB.innerHTML = `Seu TMB é ${tmb} kcal`
    }  else if (idade > 3 && idade <= 10 && sex[0].checked) {
        gender = 'Mem'
        var tmb = ((22.706 * pis.value) + 504.3)
        resultadoTM.innerHTML = `${tmb}`
    }
}