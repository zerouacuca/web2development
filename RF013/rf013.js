document.addEventListener("DOMContentLoaded", function () {
  const requests = [
      {
          date: "2024-09-15 10:00",
          description: "Impressora HP LaserJet",
          status: "ORÇADA",
          id_employee: "001"
      },
      {
          date: "2024-09-14 09:30",
          description: "Notebook Dell Inspiron",
          status: "APROVADA",
          id_employee: "001"
      },
      {
          date: "2024-09-13 08:45",
          description: "Monitor Samsung",
          status: "REJEITADA",
          id_employee: "002"
      },
      {
          date: "2024-09-12 11:15",
          description: "Teclado Logitech",
          status: "ARRUMADA",
          id_employee: "002"
      },
      {
          date: "2024-10-01 09:00",
          description: "Mouse Logitech",
          status: "ABERTA",
          id_employee: "002"
      },
      {
          date: "2024-10-01 09:00",
          description: "Teclado Logitech",
          status: "PAGA",
          id_employee: "002"
      }
  ];

  const statusAtualizado = localStorage.getItem("statusSolicitacao");
  if (statusAtualizado) {

      requests[1].status = statusAtualizado;
      localStorage.removeItem("statusSolicitacao"); 
  }

  const tableBody = document.querySelector("#requestsTable tbody");

  requests.forEach((request, index) => {
      const row = document.createElement("tr");

      const dateCell = document.createElement("td");
      dateCell.textContent = request.date;
      row.appendChild(dateCell);

      const descriptionCell = document.createElement("td");
      descriptionCell.textContent = request.description.substring(0, 30);
      row.appendChild(descriptionCell);

      const statusCell = document.createElement("td");
      statusCell.classList.add("font-bold");
      statusCell.textContent = request.status;
      row.appendChild(statusCell);

      const actionCell = document.createElement("td");

      if (request.status === "ORÇADA") {
          statusCell.classList.add("orcada");

          const approveButton = document.createElement("button");
          approveButton.textContent = "Em espera de aprovação";
          approveButton.classList.add("orcada");
          approveButton.addEventListener("click", function () {
              window.location.href = "../Budget/budget.html"; 
          });
          actionCell.appendChild(approveButton);

      } else if (request.status === "REJEITADA") {
          statusCell.classList.add("rejeitada");

          const resgatarButton = document.createElement("button");
          resgatarButton.textContent = "Resgatar Serviço";
          resgatarButton.classList.add("rejeitar");
          actionCell.appendChild(resgatarButton);
          resgatarButton.addEventListener("click", function () {
              request.status = "APROVADA";
              statusCell.textContent = request.status;
          });

      } else if (request.status === "ABERTA") {
          statusCell.classList.add("aberta");

          const efetuarButton = document.createElement("button");
          efetuarButton.textContent = "Efetuar Orçamento";
          efetuarButton.classList.add("aberta");
          actionCell.appendChild(efetuarButton);
          efetuarButton.addEventListener("click", function () {
              window.location.href = "../RF0012/rf0012.html"; 
          });

      } else if (request.status === "ARRUMADA") {
          statusCell.classList.add("arrumada");

          const pagarButton = document.createElement("button");
          pagarButton.textContent = "Efetuar manutenção";
          pagarButton.classList.add("arrumada");
          pagarButton.addEventListener("click", function () {
              window.location.href = "../RF0014/rf014.html"; 
          });
          actionCell.appendChild(pagarButton);

      } else if (request.status === "APROVADA") {
          statusCell.classList.add("aprovada");

          const manutencaoButton = document.createElement("button");
          manutencaoButton.textContent = "Efetuar Manutenção";
          manutencaoButton.classList.add("aprovada");
          manutencaoButton.addEventListener("click", function () {
             
              window.location.href = "../Apply_Maintenance/applyMaintenance.html";
          });
          actionCell.appendChild(manutencaoButton);

      } else if (request.status === "PAGA") {
          statusCell.classList.add("paga");

          const finalizarButton = document.createElement("button");
          finalizarButton.textContent = "Finalizar Solicitação";
          finalizarButton.classList.add("paga");
          finalizarButton.addEventListener("click", function () {
              window.location.href = "../RF0016/rf016.html"; 
          });
          actionCell.appendChild(finalizarButton);

      } else if (request.status === "AGUARDANDO PAGAMENTO") {
          statusCell.classList.add("aguardandoPagamento");

          const pagarButton = document.createElement("button");
          pagarButton.textContent = "Aguardando Pagamento";
          pagarButton.classList.add("aguardandoPagamento");
          actionCell.appendChild(pagarButton);
      }

      row.appendChild(actionCell);
      tableBody.appendChild(row);
  });
});
