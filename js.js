function exibirDataHora() {
    const dataHoraElemento = document.getElementById("dataHoraAtual");
    if (dataHoraElemento) {
        const agora = new Date();
        const data = agora.toLocaleDateString();
        const hora = agora.toLocaleTimeString();
        dataHoraElemento.textContent = `Data: ${data} - Hora: ${hora}`;
    }
}

// Chama a função para exibir a data e hora quando a página carrega
window.onload = exibirDataHora;