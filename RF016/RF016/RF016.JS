document.getElementById('finalizar-btn').addEventListener('click', function() {
    const dataHora = document.getElementById('dataHora').value;
    if (dataHora) {
        alert(`Solicitação finalizada com sucesso em: ${dataHora}`);
        
    } else {
        alert('Por favor, preencha a data e hora da finalização.');
    }
});
