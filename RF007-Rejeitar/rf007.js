console.log("aqui")
const btnModal = document.getElementById("rejeitar")
const modal = document.getElementById("modal")
const btnFechar = document.getElementById("closeModal")
const btnConfirmar = document.getElementById("confirmarModal")
const textJustificatica = document.getElementById("textArea").value
    // console.log("tem btn modal")
    btnModal.addEventListener('click', () => { 
        modal.style.display = 'flex'
        
    })

    btnFechar.addEventListener('click', () => {
        modal.style.display = 'none'
    })

    // ===== Codigo Lucca alterado para msg de rejeitado
    btnConfirmar.addEventListener('click', function() {
        try {
            console.log("botao confirmar clicado "); 
    
            localStorage.setItem('statusSolicitacao', 'REJEITADAAAA');
    
            const popupText = document.getElementById('myPopup');
            popupText.innerHTML = `Servico Rejeitado <br><button id="popupConfirmarBtn" onclick="window.location.href ='../Client/paginaCliente.html'">OK</button>`;
            
            openPopup();
        } catch (error) {
            console.error("Erro ao exibir o popup:", error);
        }
    });
    
    function openPopup() {
        var popup = document.getElementById("myPopup");
        popup.classList.add("show");
    }
// ==========================
