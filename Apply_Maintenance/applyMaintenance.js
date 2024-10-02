document
  .getElementById("efetuarManutencao")
  .addEventListener("click", function () {
    const descricaoManutencao = document.getElementById(
      "descricaoManutencao"
    ).value;
    const orientacoesCliente =
      document.getElementById("orientacoesCliente").value;

    if (descricaoManutencao.trim() === "" || orientacoesCliente.trim() === "") {
      alert("Preencha todos os campos para efetuar a manutenção.");
      return;
    }

    const dataHoraManutencao = new Date().toLocaleString();
    const funcionario = "Carlos Souza";

    alert(`
        Manutenção efetuada com sucesso!
        Descrição: ${descricaoManutencao}
        Orientações para o Cliente: ${orientacoesCliente}
        Data/Hora: ${dataHoraManutencao}
        Funcionário: ${funcionario}
    `);
    window.location.href = "../RF013/rf013.html";

    document.querySelector(".solicitacao-detalhes span").textContent =
      "AGUARDANDO PAGAMENTO";
    localStorage.setItem("statusSolicitacao", "AGUARDANDO PAGAMENTO");
  });

document
  .getElementById("redirecionarManutencao")
  .addEventListener("click", function () {
    const confirmacao = confirm(
      "Você tem certeza que deseja redirecionar a manutenção?"
    );

    if (confirmacao) {
      alert("Manutenção redirecionada com sucesso.");
      window.location.href = "../RF015"; //Faz a lógica e tudo mais do rf015 aqui <<<<<<<<<<<<<<
    }
  });
