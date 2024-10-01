document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    // Simulação de verificação de login
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Verificação simples
    if (username === 'usuario' && password === 'senha') {
        window.location.href = 'paginaCliente.html';
    } else {
        alert('Nome de usuário ou senha incorretos');
    }
});