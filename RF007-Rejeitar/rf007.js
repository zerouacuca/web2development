// Colocar logica para alterar o estado para rejeitada ao clicar em confirmar

const btn = document.getElementById("confirmar-rejeitar");
const modal = document.querySelector("modal-1")
const modal2 = document.querySelector("modal-2")
btn.onclick = function(){
    const motivo = document.getElementById("justificativa-rejeitar").value;
    console.log(motivo)
    motivo.addEventListener('click', () => {
        // Fecha o primeiro modal
        $(modal).modal('hide');
        // Abre o segundo modal
        $(modal2).modal('show');
    });
}
    