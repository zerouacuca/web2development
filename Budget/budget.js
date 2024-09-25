/*document.getElementById('confirmarPagamento').addEventListener('click', function() {
    const dataHoraPagamento = new Date().toLocaleString();
    const solicitacaoId = 123; // Exemplo de ID de solicitação, pode vir da API ou do local storage

    const pagamento = {
        solicitacaoId,
        dataHoraPagamento,
        valor: 450.00,
        estado: 'ORÇADA'
    };

    // Simulação de envio para o servidor
    console.log(pagamento);
    alert('Orçamento aprovado');
    alert('Orçamento rejeitado');
});*/ //O código acima não esta servindo pra nada, então comentei ele. Ele estava dando interferencia e impedindo o meu de funfar também


document.getElementById('aprovar').addEventListener('click', function() {
    try {
        const valorOrcado = document.getElementById('valor-orcado').textContent.trim();
        console.log("Valor orçado capturado:", valorOrcado); 

        localStorage.setItem('statusSolicitacao', 'APROVADA');

        const popupText = document.getElementById('myPopup');
        popupText.innerHTML = `Serviço Aprovado no Valor ${valorOrcado} <br> <button id="popupOkBtn" onclick="window.location.href ='../Client/paginaCliente.html'">OK</button>`;
        
        openPopup();
    } catch (error) {
        console.error("Erro ao exibir o popup:", error);
    }
});

function openPopup() {
    var popup = document.getElementById("myPopup");
    popup.classList.add("show");
}
