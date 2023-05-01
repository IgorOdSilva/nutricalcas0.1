function calcTMB() {
    const resTMB = document.querySelector('#resTMB')
    const pis = document.querySelector('#pis')
    const idade = document.querySelector('#idade')
    var sex = document.getElementsByName('sex')
    var gender = ''
    if (idade >= 0 && idade <=3 && sex[0].checked) {
        gender = 'Mem'
        var tmb = ((59.512 * pis.value) - 30.4).toFixed(1)
    }  else if (idade > 3 && idade <= 10 && sex[0].checked) {
        gender = 'Mem'
        var tmb = ((22.706 * pis.value) + 504.3)
    } else if (idade > 10 && idade <= 18 && sex[0].checked) {
        gender = 'Mem'
        var tmb = ((17.686 * pis.value) + 658.2)
    } else if (idade > 18 && idade <= 30 && sex[0].checked) {
        gender = 'Mem'
        var tmb = ((15.057 * pis.value) + 692.2).toFixed(1)
    } else if (idade > 30 && idade <= 60 && sex[0].checked) {
        gender = 'Mem'
        var tmb = ((11.472 * pis.value) + 873.1).toFixed(1)
    } else (idade > 60 && sex[0].checked); {
        gender = 'Mem'
        var tmb = ((11.711 * pis.value) + 587.7).toFixed(1)
    }
    resTMB.innerHTML = `Seu TMB é ${tmb}kcal`
}