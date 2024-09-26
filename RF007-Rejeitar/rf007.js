<!DOCTYPE html>
<html lang="pt-BR">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Orçamento de Serviço</title>
    <link rel="stylesheet" href="./budget.css">
</head>
<body>
    <header>
        <h1>Razer Manutenções</h1>
        <nav>
            <a href="../Client/paginaCliente.html">Minhas Solicitações</a>
            <a href="../Login/login.html">Sair</a>
        </nav>
    </header>
    <div class="container">
        <h2>Orçamento da Solicitação</h2>
        <div class="solicitacao-detalhes">
            <p><strong>Descrição do Equipamento:</strong> Computador Gamer</p>
            <p><strong>Categoria:</strong> Computadores</p>
            <p><strong>Descrição do Defeito:</strong> Tela azul ao inicializar</p>
            <p><strong>Data da Solicitação:</strong> 20/09/2024</p>
            <p><strong>Estado:</strong> <span>ORÇADA</span></p>
            <p><strong>Valor orçado:</strong> <strong id="valor-orcado">R$ 450,00</strong></p>
        </div>
        <div class="popup">
            <div class="button-container">
                <button id="aprovar" class="btn btn-success">Aprovar orçamento</button>
                <span class="popuptext" id="myPopup">Serviço Aprovado no Valor R$ <br> <button id="popupOkBtn" onclick="window.location.href ='../Client/paginaCliente.html'">OK</button></span>
                <button id="rejeitar" class="btn btn-danger">Rejeitar orçamento</button>
            </div>
    </div>
    </div>
    <script src="./budget.js"></script>
</body>
</html>
