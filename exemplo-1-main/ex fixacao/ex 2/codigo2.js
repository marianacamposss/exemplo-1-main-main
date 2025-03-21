let salario = document.getElementById("salario")
let res = document.getElementById("res")

function calcular() {
    if (salario.value) {
        let s = Number(salario.value)
        let aumento = 0

        if (s <= 1200) {
            aumento = s * 0.16
        } else if (s <= 2100) {
            aumento = s * 0.13
        } else if (s <= 3000) {
            aumento = s * 0.10
        } else {
            aumento = s * 0.05
        }

        let novoSalario = s + aumento
        res.innerHTML = `O novo salário após o aumento é R$ ${novoSalario.toFixed(2)}`
    } else {
        res.innerHTML = 'Por favor, preencha o salário.'
    }
}

function limpar() {
    res.innerHTML = 'Aqui irá aparecer o resultado...'
    salario.value = ''
}
