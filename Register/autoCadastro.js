document.getElementById('buscarCep').addEventListener('click', function() {
    let cep = document.getElementById('cep').value.replace(/\D/g, '');
    if (cep.length === 8) {
        fetch(`https://viacep.com.br/ws/${cep}/json/`)
            .then(response => response.json())
            .then(data => {
                if (!data.erro) {
                    document.getElementById('rua').value = data.logradouro;
                    document.getElementById('bairro').value = data.bairro;
                    document.getElementById('localidade').value = `${data.localidade}/${data.uf}`;
                } else {
                    alert('CEP não encontrado!');
                }
            })
            .catch(error => console.error('Erro ao buscar CEP:', error));
    } else {
        alert('CEP inválido!');
    }
});
