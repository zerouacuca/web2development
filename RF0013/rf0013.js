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
        date: "2024-09-11 14:00",
        description: "Mouse Microsoft",
        status: "OUTRO",
        id_employee: "002"

      },
      {
        date: "2024-10-01 09:00",
        description: "Mouse Logitech",
        status: "ABERTA",
        id_employee: "002"

      },
    ];
  
    // const statusAtualizado = localStorage.getItem("statusSolicitacao");
    // if (statusAtualizado) {
    //   requests[0].status = statusAtualizado;
    // }
  
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
        statusCell.classList.add("font-bold");
        statusCell.textContent = request.status;
        row.appendChild(statusCell);
  
      const actionCell = document.createElement("td");
      if (request.status === "ORÇADA") {

        statusCell.classList.add("orcada")

        const approveButton = document.createElement("button");
        approveButton.textContent = "Aprovar/Rejeitar Serviço";
        approveButton.classList.add("aprovar");
        approveButton.addEventListener("click", function () {
          // Redireciona para a página de pagamento
          window.location.href = "../Budget/budget.html"; // Ajuste o caminho conforme necessário
        });
        actionCell.appendChild(approveButton);
  
      } else if (request.status === "REJEITADA") {

        statusCell.classList.add("rejeitada")

        const resgatarButton = document.createElement("button");
        resgatarButton.textContent = "Resgatar Serviço";
        resgatarButton.classList.add("resgatar");
        actionCell.appendChild(resgatarButton);
        resgatarButton.addEventListener("click", function () {
          // muda status da rejeitada para aprovada
          request.status = "APROVADA";
          statusCell.textContent = request.status;
        });
        // ======ABERTA
        }else if (request.status === "ABERTA") {

            statusCell.classList.add("aberta")
            const resgatarButton = document.createElement("button");
            resgatarButton.textContent = "Efetuar Orçamento";
            resgatarButton.classList.add("resgatar");
            actionCell.appendChild(resgatarButton);
            resgatarButton.addEventListener("click", function () {
                window.location.href = "../RF0012/rf0012.html"; // Ajuste o caminho conforme necessário
            });
      }
    // ==========FIM ABERTA  
    // =========ARRUMADA
       else if (request.status === "ARRUMADA") {

        statusCell.classList.add("arrumada");
        const pagarButton = document.createElement("button");
        pagarButton.textContent = "Pagar Serviço";
        pagarButton.classList.add("pagar");
        pagarButton.addEventListener("click", function () {
          // Redireciona para a página de pagamento
          window.location.href = "../Pagamento/pagamento.html"; // Ajuste o caminho conforme necessário
        });
        actionCell.appendChild(pagarButton);
      }
// ===========APROVADA ??? PAREI AQUI FALTA IMPLEMENTAR OUTROS ESTADOS
      else if (request.status === "APROVADA") {

        statusCell.classList.add("aprovada");
        const Button = document.createElement("button");
        Button.textContent = "Efetuar Manuntenção";
        // Button.classList.add("");
        Button.addEventListener("click", function () {
          // Redireciona para a página de pagamento
          window.location.href = "../RF0014/rf014.html"; // Ajuste o caminho conforme necessário
        });
        actionCell.appendChild(Button);
      }
    //   =========FIM ARRUMADA
      else {
        const visualizarButton = document.createElement("button");
        visualizarButton.textContent = "Visualizar Serviço";
        visualizarButton.classList.add("visualizar");
        actionCell.appendChild(visualizarButton);
      }
  
      row.appendChild(actionCell);
      tableBody.appendChild(row);
    });
  });