import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { RouterLink, Router } from '@angular/router';
import { NgIf, CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-orcamentocliente',
  standalone: true,
  imports: [HeaderComponent, RouterLink, NgIf, CommonModule, FormsModule],
  templateUrl: './orcamentocliente.component.html',
  styleUrl: './orcamentocliente.component.css'
})

export class OrcamentoclienteComponent {

  valorOrcado = 'R$ 450,00';
  estadoSolicitacao = 'ORÇADA';
  popupVisible = false;
  popupMessage = '';
  modalVisible = false;
  justificativa = '';

  constructor(private router: Router) {}

  aprovarOrcamento() {
    this.popupMessage = `Serviço Aprovado no Valor ${this.valorOrcado}`;
    localStorage.setItem('statusSolicitacao', 'APROVADA');
    this.showPopup();
  }

  rejeitarOrcamento() {
    this.modalVisible = true;
  }

  confirmarRejeicao() {
    this.popupMessage = `Serviço Rejeitado: ${this.justificativa}`;
    localStorage.setItem('statusSolicitacao', 'REJEITADA');
    this.closeModal();
    this.showPopup();
  }

  showPopup() {
    this.popupVisible = true;
  }
  
  closeModal() {
    this.modalVisible = false;
  }

  closePopup() {
    this.popupVisible = false;
    this.router.navigate(['pgcliente']);
  }
}
  

