function calcTMB() {
    const resTMB = document.querySelector('#resTMB')
    const pis = document.querySelector('#pis')
    const idade = document.querySelector('#idade')
    var sex = document.getElementsByName('sex')
    var gender = ''
    if (idade.value >= 0 && idade.value <=3 && sex[0].checked) {
        gender = 'Mem'
        var tmb = ((59.512 * pis.value) - 30.4).toFixed(1)
    }  else if (idade.value > 3 && idade.value <= 10 && sex[0].checked) {
        gender = 'Mem'
        var tmb = ((22.706 * pis.value) + 504.3)
    } else if (idade.value > 10 && idade.value <= 18 && sex[0].checked) {
        gender = 'Mem'
        var tmb = ((17.686 * pis.value) + 658.2)
    } else if (idade.value > 18 && idade.value <= 30 && sex[0].checked) {
        gender = 'Mem'
        var tmb = ((15.057 * pis.value) + 692.2).toFixed(1)
    } else if (idade.value > 30 && idade.value <= 60 && sex[0].checked) {
        gender = 'Mem'
        var tmb = ((11.472 * pis.value) + 873.1).toFixed(1)
    } else if (idade.value > 60 && sex[0].checked) {
        gender = 'Mem'
        var tmb = ((11.711 * pis.value) + 587.7).toFixed(1)
    }
    resTMB.innerHTML = `Seu TMB é ${tmb}kcal/dia`

    if (idade.value >= 0 && idade.value <= 3 && sex[1].checked) {
        gender = 'Womem'
        var tmb = ((58.317 * pis.value) - 31.1).toFixed(1)
    } else if (idade.value > 3 && idade.value <= 10 && sex[1].checked) {
        gender = 'Womem'
        var tmb = ((20.315 * pis.value) + 485.9).toFixed(1)
    } else if (idade.value > 10 && idade.value <= 18 && sex[1].checked) {
        gender = 'Womem'
        var tmb = ((13.384 * pis.value) + 692.6).toFixed(1) 
    } else if (idade.value > 18 && idade.value <= 30 && sex[1].checked) {
        gender = 'Womem'
        var tmb = ((14.818 * pis.value) + 486.6).toFixed(1)
    } else if (idade.value > 30 && idade.value <= 60 && sex[1].checked) {
        gender = 'Womem'
        var tmb = ((8.126 * pis.value) + 845.6).toFixed(1)
    } else if (idade.value > 60 && sex[1].checked) {
        gender = 'Womem'
        var tmb = ((9.082 * pis.value) + 658.5)
    }
    resTMB.innerHTML = `Seu TMB é: ${tmb}kcal/dia`
}