document.addEventListener("DOMContentLoaded", function () {
  const requests = [
    {
      date: "2024-09-15 10:00",
      description: "Impressora HP LaserJet",
      status: "ORÇADA",
    },
    {
      date: "2024-09-14 09:30",
      description: "Notebook Dell Inspiron",
      status: "APROVADA",
    },
    {
      date: "2024-09-13 08:45",
      description: "Monitor Samsung",
      status: "REJEITADA",
    },
    {
      date: "2024-09-12 11:15",
      description: "Teclado Logitech",
      status: "ARRUMADA",
    },
    {
      date: "2024-09-11 14:00",
      description: "Mouse Microsoft",
      status: "OUTRO",
    },
  ];

  const statusAtualizado = localStorage.getItem("statusSolicitacao");
  if (statusAtualizado) {
    requests[0].status = statusAtualizado;
  }

  const tableBody = document.querySelector("#requestsTable tbody");

  requests.forEach((request) => {
    const row = document.createElement("tr");

    const dateCell = document.createElement("td");
    dateCell.textContent = request.date;
    row.appendChild(dateCell);

    const descriptionCell = document.createElement("td");
    descriptionCell.textContent = request.description.substring(0, 30);
    row.appendChild(descriptionCell);

    const statusCell = document.createElement("td");
    statusCell.textContent = request.status;
    row.appendChild(statusCell);


    const actionCell = document.createElement("td");
    if (request.status === "ORÇADA") {
      const approveButton = document.createElement("button");
      approveButton.textContent = "Aprovar/Rejeitar Serviço";
      approveButton.classList.add("aprovar");
      approveButton.addEventListener("click", function () {
        // Redireciona para a página de pagamento
        window.location.href = "../Budget/budget.html"; // Ajuste o caminho conforme necessário
      });
      actionCell.appendChild(approveButton);

      /*const rejectButton = document.createElement('button');
            rejectButton.textContent = 'Rejeitar';
            rejectButton.classList.add('rejeitar');
            actionCell.appendChild(rejectButton);*/
    } else if (request.status === "REJEITADA") {
      const resgatarButton = document.createElement("button");
      resgatarButton.textContent = "Resgatar Serviço";
      resgatarButton.classList.add("resgatar");
      actionCell.appendChild(resgatarButton);
      resgatarButton.addEventListener("click", function () {
        // muda status da rejeitada para aprovada
        request.status = "APROVADA";
        statusCell.textContent = request.status;
      });
    } else if (request.status === "ARRUMADA") {
      const pagarButton = document.createElement("button");
      pagarButton.textContent = "Pagar Serviço";
      pagarButton.classList.add("pagar");
      pagarButton.addEventListener("click", function () {
        // Redireciona para a página de pagamento
        window.location.href = "../Pagamento/pagamento.html"; // Ajuste o caminho conforme necessário
      });
      actionCell.appendChild(pagarButton);
    } else {
      const visualizarButton = document.createElement("button");
      visualizarButton.textContent = "Visualizar Serviço";
      visualizarButton.classList.add("visualizar");
      actionCell.appendChild(visualizarButton);
    }

    row.appendChild(actionCell);
    tableBody.appendChild(row);
  });

});
