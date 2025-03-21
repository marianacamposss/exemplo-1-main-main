// Seleciona os elementos HTML com IDs específicos e atribui-os a variáveis.
let n1 = document.getElementById("n1") // input para o primeiro número.
let n2 = document.getElementById("n2") // input para o segundo número.
let n3 = document.getElementById("n3")
let res = document.getElementById("res") // Elemento onde os resultados serão exibidos.

// Funções das operações
function calcular() {
    // Verifica se todos os campos têm valores inseridos
    if (n1.value && n2.value && n3.value) {
        // Calcula o valor da hora trabalhada
        let valorHora = Number(n1.value) / 200;
        
        // Calcula o valor total das horas extras
        let valorHorasExtrasNormais = valorHora * Number(n2.value);
        let valorHorasExtrasFinaisSemana = valorHora * Number(n3.value) * 1.5;

        // Soma os valores e exibe o resultado
        let total = valorHorasExtrasNormais + valorHorasExtrasFinaisSemana;
        res.innerHTML = `O valor total a receber pelas horas extras é R$ ${total.toFixed(2)}`;
    } else {
        // Exibe uma mensagem caso algum campo esteja vazio
        res.innerHTML = 'Por favor, preencha todos os campos.';
    }
}


// Função para limpar os campos de input e a área de resultados.
function limpar() {
    res.innerHTML = 'Aqui irá aparecer o resultado...';
    n1.value = ''; 
    n2.value = ''; 
    n3.value = '';
}
