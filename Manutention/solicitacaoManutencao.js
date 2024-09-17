document.getElementById('solicitacaoForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const descricaoEquipamento = document.getElementById('descricaoEquipamento').value;
    const categoriaEquipamento = document.getElementById('categoriaEquipamento').value;
    const descricaoDefeito = document.getElementById('descricaoDefeito').value;
    const dataHora = new Date().toLocaleString();
    const estado = 'ABERTA';

    const solicitacao = {
        descricaoEquipamento,
        categoriaEquipamento,
        descricaoDefeito,
        dataHora,
        estado
    };

    // Aqui você pode enviar a solicitação para o servidor ou armazená-la localmente
    console.log('Solicitação enviada:', solicitacao);
    alert('Solicitação enviada com sucesso!');
});
