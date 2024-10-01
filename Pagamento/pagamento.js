document.getElementById('confirmarPagamento').addEventListener('click', function() {
    const dataHoraPagamento = new Date().toLocaleString();
    const solicitacaoId = 123; // Exemplo de ID de solicitação, pode vir da API ou do local storage

    const pagamento = {
        solicitacaoId,
        dataHoraPagamento,
        valor: 450.00,
        estado: 'PAGO'
    };

    // Simulação de envio para o servidor
    console.log('Pagamento confirmado:', pagamento);
    alert('Pagamento realizado com sucesso!');
});
