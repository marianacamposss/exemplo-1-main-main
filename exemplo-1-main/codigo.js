// Seleciona os elementos HTML com IDs específicos e atribui-os a variáveis.
let n1 = document.getElementById("n1") // input para o primeiro número.
let n2 = document.getElementById("n2") // input para o segundo número.
let res = document.getElementById("res") // Elemento onde os resultados serão exibidos

// Funções das operações
function somar() {
    // Converte os valores dos inputs para número e exibe o resultado no elemento 'res'.
    res.innerHTML += `<p>O resultado da soma entre ${n1.value} e ${n2.value} é ${Number(n1.value) + Number(n2.value)}</p>`;
}

function subtrair() {
    res.innerHTML += `<p>O resultado da subtração entre ${n1.value} e ${n2.value} é ${Number(n1.value) - Number(n2.value)}</p>`;
}


function multiplicar() {
    res.innerHTML += `<p>O resultado da multiplicação entre ${n1.value} e ${n2.value} é ${Number(n1.value) * Number(n2.value)}</p>`;
}

function dividir() {
    // Verifica se n2 é igual a 0 para evitar divisão por zero.
    if (Number(n2.value) === 0) {
        res.innerHTML += `<p>Divisão por 0 não é permitida.</p>`;
    } else {
        res.innerHTML += `<p>O resultado da divisão entre ${n1.value} e ${n2.value} é ${Number(n1.value) / Number(n2.value)}</p>`;
    }
}

function raiz() {
    let numero1 = Number(n1.value);
    let numero2 = Number(n2.value);

    // Calcula a raiz quadrada de ambos os números
    res.innerHTML += `<p>A raiz quadrada de ${numero1} é ${Math.sqrt(numero1)}</p>`;
    res.innerHTML += `<p>A raiz quadrada de ${numero2} é ${Math.sqrt(numero2)}</p>`;
}

function potencia() {
    let base = Number(n1.value);
    let expoente = Number(n2.value);

    res.innerHTML += `<p>O resultado de ${base} elevado a ${expoente} é ${Math.pow(base, expoente)}</p>`;
}


// Função para limpar os campos de input e a área de resultados.
function limpar() {
    res.innerHTML = 'Aqui irá aparecer o resultado...'; // Mensagem padrão após limpar.
    n1.value = ''; // Limpa o campo do primeiro número.
    n2.value = ''; // Limpa o campo do segundo número.
}
