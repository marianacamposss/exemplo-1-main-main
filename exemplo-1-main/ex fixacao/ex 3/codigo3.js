function calcularCusto() {
    const qtdFuncionarios = parseInt(document.getElementById("qtdFuncionarios").value);
    const diasUteis = parseInt(document.getElementById("diasUteis").value);

    if (isNaN(qtdFuncionarios) || qtdFuncionarios <= 0 || isNaN(diasUteis) || diasUteis <= 0) {
        document.getElementById("resultado").innerHTML = "Por favor, insira valores válidos.";
        return;
    }

    let valorPorPessoa = 0;

    if (qtdFuncionarios >= 1 && qtdFuncionarios <= 49) {
        valorPorPessoa = 4.50;
    } else if (qtdFuncionarios >= 50 && qtdFuncionarios <= 99) {
        valorPorPessoa = 4.10;
    } else if (qtdFuncionarios >= 100 && qtdFuncionarios <= 149) {
        valorPorPessoa = 3.80;
    } else {
        valorPorPessoa = 3.60;
    }

    let custoTotal = qtdFuncionarios * valorPorPessoa * diasUteis;

    document.getElementById("resultado").innerHTML = 
        `Custo mensal do transporte: <strong>R$ ${custoTotal.toFixed(2)}</strong>`;
}